import express, { urlencoded } from 'express'
import 'express-async-errors'
import { json } from 'express'
import { errorHandler } from '@tyagiy006/common';
import { NotFoundError , currentUser} from '@tyagiy006/common';
import cookieSession from 'cookie-session';
import { createTicketRouter } from './routes/new';
import { showTicketRouter } from './routes/show';
import { indexTicketRouter } from './routes';
import { updateTicketRouter } from './routes/update';


const app = express();
app.set('trust proxy' , true);

app.use(json());
app.use(urlencoded({extended : true}));

app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
}))

app.use(currentUser);

app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);
app.use(updateTicketRouter);

app.get('/' , (req , res) : void => {
    console.log('Event Received');
    res.send("Hi There");
})

app.use(errorHandler);

app.all('*' , async (req , res , next) => {
    throw new NotFoundError();
})

export { app };