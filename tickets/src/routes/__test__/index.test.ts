import request from 'supertest';
import { app } from '../../app';
import { create } from 'ts-node';



function createTicket(title: string , price: number){
    return request(app)
    .post('/api/tickets')
    .set('Cookie' , global.signin())
    .send({
        title,
        price
    })
}

it('can fetch a list of tickets' , async () => {
    await createTicket('Concert' , 20);
    await createTicket('Concert 2' , 30);

    const response = await request(app)
    .get('/api/tickets')
    .send()
    .expect(200);

    expect(response.body.length).toEqual(2);    
})