import { Subjects } from "./subjects";


export interface TicketCreatedEvent extends Event {
    subject: Subjects.ticketCreated;
    data: {
        id: string;
        title: string;
        price: number;
    }
}