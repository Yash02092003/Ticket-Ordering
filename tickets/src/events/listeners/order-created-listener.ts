import { Listener , OrderCreatedEvent , Subjects} from "@tyagiy006/common";
import { queueGroupName } from "./queue-group-name";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../models/ticket";
import { TicketUpdatedPublisher } from "../publishers/ticket-updated-publisher";

export class OrderCreatedListener extends Listener<OrderCreatedEvent>{
    subject : Subjects.orderCreated = Subjects.orderCreated;
    queueGroupName = queueGroupName;

    async onMessage(data: OrderCreatedEvent['data'] , msg : Message){
        // find the ticket that the order is reserving
        const ticket = await Ticket.findById(data.ticket);

        // If no ticket, throw error
        if(!ticket){
            throw new Error('Ticket not found');
        }

        // Mark the ticket as being reserved by setting its orderId property
        ticket.set({orderId: data.id});

        // Save the ticket
        await ticket.save();

        await new TicketUpdatedPublisher(this.client).publish({
            id : ticket.id ,
            price : ticket.price,
            title : ticket.title,
            userId : ticket.userId,
            version : ticket.version,
            orderId : ticket.orderId
        })

        // ack the message
        msg.ack();
    }
}