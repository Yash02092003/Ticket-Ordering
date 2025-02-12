import express , { Request , Response , Router} from 'express';
import { Ticket } from '../models/ticket';
import { validateRequest , NotFoundError , requireAuth, BadRequestError } from '@tyagiy006/common';
import { body } from 'express-validator';
import NotAuthorizedError from '@tyagiy006/common/build/common/src/errors/not-authorized-error';
import { TicketUpdatedPublisher } from '../events/publishers/ticket-updated-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = Router();

router.put('/api/tickets/:id' , requireAuth, [
    body('title').not().isEmpty().withMessage('Title is required'),
    body('price').isFloat({gt: 0}).withMessage('Price must be provided and greater than zero')
] , validateRequest ,  async (req : Request , res : Response) => {
    const ticket = await Ticket.findById(req.params.id);

    if(!ticket){
        throw new NotFoundError();
    }

    if(ticket.orderId){
        throw new BadRequestError('Cannot edit a reserved Ticket')
    }

    if(ticket.userId !== req.currentUser!.id){
        throw new NotAuthorizedError();
    }

    ticket.set({
        title : req.body.title ,
        price: req.body.price
    })

    await ticket.save();

    new TicketUpdatedPublisher(natsWrapper.client).publish({
        id : ticket.id ,
        version : ticket.version,
        title : ticket.title ,
        price : ticket.price ,
        userId : ticket.userId ,
    })

    res.send(ticket);
});

export { router as updateTicketRouter };