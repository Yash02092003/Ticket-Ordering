import { Message , Stan } from "node-nats-streaming";
import { Subjects } from "./subjects";

interface Event{
    subject: Subjects;
    data: any;
}

export abstract class Listener<T extends Event> {
    private client: Stan;
    abstract subject: T['subject'];
    abstract queueGroupName: string;
    protected ackWait = 5 * 1000;
    abstract onMessage(data: T['data'] , msg: Message): void;
    constructor(client: Stan){
        this.client = client;
    }

    subscriptionOptions(){
        return this.client
        .subscriptionOptions()
        .setDeliverAllAvailable()
        .setManualAckMode(true)
        .setAckWait(this.ackWait)
        .setDurableName(this.queueGroupName);
    }

    listen(){
        const subscribe = this.client.subscribe(this.subject , this.queueGroupName , this.subscriptionOptions());
        subscribe.on('message' , (msg : Message) => {
            console.log(
                `Message received: ${this.subject} / ${this.queueGroupName}`
            )

            const paresedData = this.parseMessage(msg);
            this.onMessage(paresedData , msg);
        })
    }

    parseMessage(msg: Message){
        const data = msg.getData();
        return typeof data === 'string' ? JSON.parse(data) : JSON.parse(data.toString('utf-8'));
    }
}