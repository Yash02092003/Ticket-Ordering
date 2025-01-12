import { Listener, OrderCancelledEvent , OrderStatus, Subjects , TicketUpdatedEvent} from "@tyagiy006/common";
import { queueGroupName } from "./queue-group-name";
import { Message, Stan } from "node-nats-streaming";
import { Ticket, TicketDoc } from "../../models/ticket";
import { TicketUpdatedPublisher } from "../publishers/ticket-updated-publisher";

export class OrderCancelledListener extends Listener<OrderCancelledEvent>{
    subject: Subjects.orderCancelled = Subjects.orderCancelled;
    queueGroupName = queueGroupName;
    newClient: Stan;

    constructor(Iclient: Stan) {
        super(Iclient);
        this.newClient = Iclient;
    }
    async onMessage(data : OrderCancelledEvent['data'] , msg : Message){
        const ticket = await Ticket.findById(data.ticket.id) as TicketDoc;
        if(!ticket){
            throw new Error('No ticket was found');
        }

        ticket.set({orderId: undefined});

        await ticket.save();

        await new TicketUpdatedPublisher(this.newClient).publish({
            id : ticket.id,
            orderId : ticket.orderId,
            userId : ticket.userId,
            price : ticket.price,
            version : ticket.price,
            title : ticket.title
        } as TicketUpdatedEvent['data']);

        msg.ack();
    }
}