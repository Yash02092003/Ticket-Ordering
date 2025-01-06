import { Listener, OrderCreatedEvent, OrderStatus, Subjects } from "@tyagiy006/common";
import { queueGroupName } from "./queueGroupName";
import { Message } from "node-nats-streaming";
import expirationQueue from "../../queues/expiration-queue";

export class OrderCreatedListener extends Listener<OrderCreatedEvent>{
    subject : Subjects.orderCreated = Subjects.orderCreated;
    queueGroupName: string = queueGroupName;
    async onMessage(data: OrderCreatedEvent['data'], msg: Message): Promise<void>{
        const delay = new Date(data.expiresAt).getTime() - new Date().getTime();
        console.log('Waiting this many milliseconds to process the job: ' , delay);
        
        await expirationQueue.add({
            orderId : data.id
        } , {
            delay : delay
        });

        msg.ack();
    }
}