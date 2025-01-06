import nats, { Stan } from 'node-nats-streaming';
import { TicketCreatedListener } from './Events/ticket-created-listener';
import { randomBytes } from 'crypto';

const stan = nats.connect('ticketing' , randomBytes(4).toString('hex') , {
    url: 'http://localhost:4222'
})

stan.on('connect' , () => {
    console.log('Listener connected to NATS');

    // This is for close event
    stan.on('close' , () => {
        console.log('NATS connection closed!')
        process.exit();
    })

    new TicketCreatedListener(stan).listen();
})

process.on('SIGINT' , () => stan.close()); // This is for interrupt signal
process.on('SIGTERM' , () => stan.close()); // This is for termination signal



