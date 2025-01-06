import { Publisher , Subjects , TicketCreatedEvent } from "@tyagiy006/common";
export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    subject: Subjects.ticketCreated = Subjects.ticketCreated;
    
}