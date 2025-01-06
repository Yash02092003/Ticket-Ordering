import express from 'express';
import { Request , Response , NextFunction } from 'express';
import { requireAuth } from '@tyagiy006/common';
import { body } from 'express-validator';
import { validateRequest } from '@tyagiy006/common';
import { Ticket } from '../models/ticket';
import { TicketCreatedPublisher } from '../events/publishers/ticket-created-publisher';
import { natsWrapper } from '../nats-wrapper';

const Router = express.Router();

Router.post('/api/tickets' , requireAuth  , [
    body('title').not().isEmpty().withMessage('Title is required') ,
    body('price').isFloat({gt: 0}).withMessage('Price must be greater than 0')
], validateRequest, async (req : Request , res : Response) : Promise<any> => {
    const { title , price } = req.body;
    const ticket = Ticket.build({
        title , price , userId: req.currentUser!.id
    })

    await ticket.save()
    await new TicketCreatedPublisher(natsWrapper.client).publish({
        id: ticket.id,
        version : ticket.version,
        title: ticket.title,
        price : title.price,
        userId : ticket.userId
    })

    res.status(201).send(ticket);
})


export {Router as createTicketRouter};