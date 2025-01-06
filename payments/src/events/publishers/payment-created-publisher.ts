import { Publisher , Subjects , PaymentCreatedEvent} from "@tyagiy006/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent>{
    subject : Subjects.paymentCreated = Subjects.paymentCreated;
}