import express, { urlencoded } from 'express'
import 'express-async-errors'
import { json } from 'express'
import { currentUser, errorHandler, NotFoundError } from '@tyagiy006/common'
import cookieSession from 'cookie-session';
import { indexOrderRouter } from './routes';
import { newOrderRouter } from './routes/new';
import { showOrderRouter } from './routes/show';
import { deleteOrderRouter } from './routes/delete';


const app = express();
app.set('trust proxy' , true);

app.use(json());
app.use(urlencoded({extended : true}));

app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
}))

app.use(currentUser);
app.use(errorHandler);
app.use(indexOrderRouter);
app.use(showOrderRouter);
app.use(newOrderRouter);
app.use(deleteOrderRouter);

app.get('/' , (req , res) : void => {
    console.log('Event Received');
    res.send("Hi There");
})

app.all('*' , async (req , res , next) => {
    throw new NotFoundError();
})

export { app };