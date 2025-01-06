import express , {Request , Response} from 'express';
import { Ticket } from '../models/ticket';
import { NotFoundError } from '@tyagiy006/common';

const router = express.Router();

router.get('/api/tickers/:id' , async (req : Request , res : Response) => {
    const ticket = await Ticket.findById(req.params.id);
    
    if(!ticket){
        throw new NotFoundError();
    }

    //Default status code is 200
    //201 is resource created
    res.send(ticket);
})

export {router as showTicketRouter};