import { Publisher , OrderCreatedEvent , Subjects } from "@tyagiy006/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
    subject: Subjects.orderCreated = Subjects.orderCreated;
}