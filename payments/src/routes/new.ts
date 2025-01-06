import express , { Request , Response } from 'express';
import { body } from 'express-validator';
import { requireAuth , validateRequest , NotFoundError , BadRequestError, OrderStatus } from '@tyagiy006/common';
import Order from '../models/order';
import NotAuthorizedError from '@tyagiy006/common/build/common/src/errors/not-authorized-error';
import { stripe } from '../stripe';
import Payment from '../models/payment';
import { PaymentCreatedPublisher } from '../events/publishers/payment-created-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.post('/api/payments' , requireAuth , [
    body('token').not().isEmpty(),
    body('orderId').not().isEmpty()
] , validateRequest , async ( req : Request , res : Response) : Promise<any> => {
    const { token , orderId } = req.body;
    const order = await Order.findById(orderId);
    if(!order){
        throw new NotFoundError();
    }
    if(order.userId !== req.currentUser!.id){
        throw new NotAuthorizedError();
    }
    if(order.status === OrderStatus.Cancelled){
        throw new BadRequestError('Cannot pay for an cancelled order');
    }

    const info = await stripe.charges.create({
        currency : 'usd' ,
        amount : order.price * 100,
        source : token
    })

    const payment = Payment.build({
        orderId ,
        stripeId : info.id
    })

    await payment.save();

    new PaymentCreatedPublisher(natsWrapper.client).publish({
        id : payment.id,
        orderId : payment.orderId,
        stripeId : payment.stripeId
    })

    res.status(201).send({id : payment.id});
})

export { router as createChargeRouter };