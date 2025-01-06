import { Publisher , Subjects , TicketUpdatedEvent } from "@tyagiy006/common";
export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
    subject: Subjects.ticketUpdated = Subjects.ticketUpdated;
    
}