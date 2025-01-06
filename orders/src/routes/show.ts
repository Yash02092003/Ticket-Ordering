import express , { Request , Response } from "express";
import { NotFoundError, requireAuth } from '@tyagiy006/common';
import Order from "../models/order";
import NotAuthorizedError from "@tyagiy006/common/build/common/src/errors/not-authorized-error";

const router = express.Router();

router.get('/api/orders/:orderId' , requireAuth , async (req : Request , res : Response) => {
    const order = await Order.findById(req.params.orderId).populate('Ticket')
    if(!order){
        throw new NotFoundError();
    }

    if(order.userId !== req.currentUser!.id){
        throw new NotAuthorizedError();
    }

    res.send(order);
})

export { router as showOrderRouter};