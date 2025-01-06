import express, { urlencoded } from 'express'
import 'express-async-errors'
import { json } from 'express'
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from '@tyagiy006/common';
import { NotFoundError } from '@tyagiy006/common';
import cookieSession from 'cookie-session';


const cors = require('cors');
const app = express();
app.set('trust proxy' , true);
app.use(cors({
    credentials: true,
}));

app.use(json());
app.use(urlencoded({extended : true}));

app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
}))

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter)
app.use(signupRouter);



app.use(errorHandler);

app.get('/' , (req , res) : void => {
    console.log('Event Received');
    res.send("Hi There");
})

app.all('*' , async (req , res , next) => {
    throw new NotFoundError();
})

export { app };