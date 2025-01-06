import  request  from "supertest";
import { app } from "../../app";

it('fails when a email that does not exist is supplied' , async () => {
    await request(app)
    .post('/api/users/signup')
    .send({
        email : 'test@gmail.com',
        password : 'password'
    })
    .expect(201);

    await request(app)
    .get('/api/users/signin')
    .send({
        email : 'test2@gmail.com',
        password : 'password'
    })
    .expect(400);
    
})

it('fails when an incorrect password is supplied' , async () => {
    await request(app)
    .post('/api/users/signup')
    .send({
        email : 'test@gmail.com' ,
        password : 'password'
    })
    .expect(201);

    await request(app)
    .get('/api/users/signin')
    .send({
        email : 'test@gmail.com',
        password : 'pass'
    })
    .expect(400);
})

it('sets a cookie after successful signin' , async () => {
    await request(app)
    .post('/api/users/signup')
    .send({
        email : 'test@gmail.com' ,
        password : 'password'
    })
    .expect(201);

    const response = await request(app)
    .get('/api/users/signin')
    .send({
        email : 'test@gmail.com',
        password : 'password'
    })
    .expect(200);

    expect(response.get('Set-Cookie')).toBeDefined();

})