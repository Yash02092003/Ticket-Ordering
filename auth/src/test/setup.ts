import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { app } from '../app';
import request from 'supertest';

declare global {
    var signin : () => Promise<string[]>;
}



let mongo: any;
//Before all tests , start an in-memory mongodb server and let mongoose connect to it
beforeAll(async () => {
    process.env.JWT_KEY = 'asdf';
    mongo = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri();

    await mongoose.connect(mongoUri);

})

//before each test , clear all collections in the in-memory database
beforeEach(async () => {
    if(mongoose.connection.db){
        var collections = await mongoose.connection.db.collections();
        for (let collection of collections){
            await collection.deleteMany({});
        }
    }
})

//After all tests , stop the in-memory mongodb server and close mongoose connection
afterAll(async () => {
    if(mongo){
        await mongo.stop();
    }
    await mongoose.connection.close();
})

global.signin = async () => {
    const email = 'test@gmail.com';
    const password = 'password';

    const response = await request(app)
    .post('/api/users/signup')
    .send({
        email,
        password
    })
    .expect(201);

    const cookie = response.get('Set-Cookie')

    if(!cookie){
        throw new Error('Cookie not set after signuo');
    }

    return cookie;
}