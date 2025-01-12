import { Listener , OrderCreatedEvent , Subjects , TicketUpdatedEvent} from "@tyagiy006/common";
import { queueGroupName } from "./queue-group-name";
import { Message } from "node-nats-streaming";
import { Ticket , TicketDoc} from "../../models/ticket";
import { TicketUpdatedPublisher } from "../publishers/ticket-updated-publisher";
import { Stan } from "node-nats-streaming";

export class OrderCreatedListener extends Listener<OrderCreatedEvent>{
    subject : Subjects.orderCreated = Subjects.orderCreated;
    queueGroupName = queueGroupName;
    newClient: Stan;

    constructor(Iclient: Stan) {
        super(Iclient);
        this.newClient = Iclient;
    }

    async onMessage(data: OrderCreatedEvent['data'] , msg : Message){
        // find the ticket that the order is reserving
        const ticket = await Ticket.findById(data.ticket) as TicketDoc;

        // If no ticket, throw error
        if(!ticket){
            throw new Error('Ticket not found');
        }

        // Mark the ticket as being reserved by setting its orderId property
        ticket.set({orderId: data.id});

        // Save the ticket
        await ticket.save();

        await new TicketUpdatedPublisher(this.newClient).publish({
            id : ticket.id ,
            price : ticket.price,
            title : ticket.title,
            userId : ticket.userId,
            version : ticket.version,
            orderId : ticket.orderId
        } as TicketUpdatedEvent['data'])

        // ack the message
        msg.ack();
    }
}