import mongoose from 'mongoose';
import { app } from './app';
import { natsWrapper } from './nats-wrapper'; 
import { TicketCreatedListener } from './Events/listeners/ticket-created-listener';
import { TicketUpdatedListener } from './Events/listeners/ticket-updated-listener';
import { ExpirationCompleteListener } from './Events/listeners/expiration-complete-listener';
import { PaymentCreatedListener } from './Events/listeners/payment-created-listener';

const start = async () => {
    console.log('Starting Tickets Service...');
    if(!process.env.JWT_KEY){
        throw new Error('JWT_KEY must be definec');
    }

    if(!process.env.MONGO_URI){
        throw new Error('MONGO_URI must be defined');
    }

    if(!process.env.NATS_CLIENT_ID){
        throw new Error('NATS_CLIENT_ID must be defined');
    }

    if(!process.env.NATS_URL){
        throw new Error('NATS_URL must be defined');
    }

    if(!process.env.NATS_CLUSTER_ID){
        throw new Error('NATS_CLUSTER_ID must be defined');
    }
    
    try{
        await natsWrapper.connect(process.env.NATS_CLUSTER_ID , process.env.NATS_CLIENT_ID , process.env.NATS_URL)
        natsWrapper.client.on('close' , () => {
            console.log('NATS Connection Closed');
            process.exit();
        })

        process.on('SIGINT' , () => natsWrapper.client.close())
        process.on('SIGTERM' , () => natsWrapper.client.close())

        new TicketCreatedListener(natsWrapper.client).listen();
        new TicketUpdatedListener(natsWrapper.client).listen();
        new ExpirationCompleteListener(natsWrapper.client).listen();
        new PaymentCreatedListener(natsWrapper.client).listen();

        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.error(err);
    }

    app.listen(3000 , () => {
        console.log("Tickets service listening on PORT 3000");
    }) 
}

start();

