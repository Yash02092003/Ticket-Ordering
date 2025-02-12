import Queue from 'bull'
import { ExpirationCompletePublisher } from '../events/publishers/expiration-complete-publisher';
import { natsWrapper } from '../nats-wrapper';

interface Payload{
    orderId: string;
}

const expirationQueue = new Queue<Payload>('order:expiration' , {
    redis: {
        host : process.env.REDIS_HOST
    }

})

expirationQueue.process(async (job) => {
    const publisher = new ExpirationCompletePublisher(natsWrapper.client);
    await publisher.publish({
        orderId : job.data.orderId
    })
})

export default expirationQueue;
