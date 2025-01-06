import { Listener, OrderCancelledEvent , OrderStatus, Subjects } from "@tyagiy006/common";
import { queueGroupName } from "./queue-group-name";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../models/ticket";
import { TicketUpdatedPublisher } from "../publishers/ticket-updated-publisher";

export class OrderCancelledListener extends Listener<OrderCancelledEvent>{
    subject: Subjects.orderCancelled = Subjects.orderCancelled;
    queueGroupName = queueGroupName;
    async onMessage(data : OrderCancelledEvent['data'] , msg : Message){
        const ticket = await Ticket.findById(data.ticket.id);
        if(!ticket){
            throw new Error('No ticket was found');
        }

        ticket.set({orderId: undefined});

        await ticket.save();

        await new TicketUpdatedPublisher(this.client).publish({
            id : ticket.id,
            orderId : ticket.orderId,
            userId : ticket.userId,
            price : ticket.price,
            version : ticket.price,
            title : ticket.title
        })

        msg.ack();
    }
}