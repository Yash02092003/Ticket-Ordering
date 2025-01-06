import { Message } from 'node-nats-streaming'
import { Subjects, Listener , TicketUpdatedEvent } from '@tyagiy006/common'
import Ticket from '../../models/ticket'
import { queueGroupName } from './queue-group-name'


export class TicketUpdatedListener extends Listener<TicketUpdatedEvent>{
    subject: Subjects.ticketUpdated = Subjects.ticketUpdated;
    queueGroupName: string = queueGroupName;

    async onMessage(data : TicketUpdatedEvent['data'] , msg: Message): Promise<void>{
        const { id , title , price , version} = data;
        
        const ticket = await Ticket.findByEvent({id , version});

        if(!ticket) {
            throw new Error('Ticket not found');
        }

        ticket.set({
            title , price 
        })

        await ticket.save();

        msg.ack();
    }
}