import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { app } from '../app';
import request from 'supertest';
import jwt from 'jsonwebtoken';

declare global {
    var signin : (id ?: string) => string[];
}

let mongo: any;

jest.mock('../nats-wrapper');

process.env.STRIPE_KEY = "sk_test_51QdvxuPqX4LDLpGckq1ygaaLURhwInLE0CfHgbWz800hdo4GwevO2T7ZiFKhrX9mGzGL932nrdjxsytxa4j4V7j000icCVGgDZ"

//Before all tests , start an in-memory mongodb server and let mongoose connect to it
beforeAll(async () => {
    process.env.JWT_KEY = 'asdf';
    mongo = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri();

    await mongoose.connect(mongoUri);

})

//before each test , clear all collections in the in-memory database
beforeEach(async () => {
    jest.clearAllMocks();
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

//If async function is used then it will return a promise
global.signin = (id?:string) => {
    //Build a JSON webToken paload. {id , email}
    const payload = {
        id : id || new mongoose.Types.ObjectId().toHexString(),
        email : 'test@gmail.com'
    }

    //Create the JWT
    const token = jwt.sign(payload , process.env.JWT_KEY!);

    //Build session Object. { jwt : MY_JWT }
    const session = { jwt : token };

    //Turn that session into JSON
    const sessionJSON = JSON.stringify(session);

    //Take JSON and encode it as base64
    const base64 = Buffer.from(sessionJSON).toString('base64');

    //return a string thats the cookie with the encoded data
    return [`session=${base64}`];
}