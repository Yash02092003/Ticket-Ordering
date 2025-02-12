import { Listener , OrderCreatedEvent , Subjects } from "@tyagiy006/common";
import { queueGroupName } from "./queueGroupName";
import { Message } from "node-nats-streaming";
import Order from "../../models/order";

export class OrderCreatedListener extends Listener<OrderCreatedEvent>{
    subject : Subjects.orderCreated = Subjects.orderCreated;
    queueGroupName : string = queueGroupName;

    async onMessage(data: OrderCreatedEvent['data'] , msg: Message){
        const order = Order.build({
            id : data.id,
            price : data.ticket.price ,
            status : data.status,
            userId : data.userId,
            version : data.version
        })

        await order.save();

        msg.ack();
    }
}