import { Subjects , ExpirationCompleteEvent , Publisher } from "@tyagiy006/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
    subject : Subjects.expirationComplete = Subjects.expirationComplete;
}

