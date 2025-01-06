import { Publisher , OrderCancelledEvent , Subjects } from "@tyagiy006/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
    subject: Subjects.orderCancelled = Subjects.orderCancelled;
} 