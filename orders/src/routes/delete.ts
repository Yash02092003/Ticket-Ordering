import express , { Request , Response } from "express";
import { validateRequest , requireAuth , OrderStatus, NotFoundError} from "@tyagiy006/common";
import Order from "../models/order";
import NotAuthorizedError from "@tyagiy006/common/build/common/src/errors/not-authorized-error";
import { OrderCancelledPublisher } from "../Events/publishers/order-cancelled-publisher";
import { natsWrapper } from "../nats-wrapper";

const router = express.Router();

router.delete('/api/orders/:orderId' , async (req : Request , res : Response) => {
    const { orderId } = req.params;
    const order = await Order.findById(orderId).populate('Ticket');
    if(!order){
        throw new NotFoundError();
    }
    if(order.userId !== req.currentUser!.id){
        throw new NotAuthorizedError();
    }

    order.status = OrderStatus.Cancelled;
    order.save();

    new OrderCancelledPublisher(natsWrapper.client).publish({
        id : order.id,
        version : order.version,
        ticket : {
            id : order.ticket.id,
            price : order.ticket.price
        }
    })

    res.status(204).send(order);
})

export { router as deleteOrderRouter};