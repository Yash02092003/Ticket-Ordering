import express from 'express'
import { currentUser } from '@tyagiy006/common';

const router = express.Router();

router.get('/api/users/currentuser' , currentUser ,  (req , res) : any => {
    // if(!req.session?.jwt) --> equivalent to the below one
    // if(!req.session || !req.session.jwt){
    //     return res.send({ currentUser : null});
    // }

    // try{
    //     const payload = jwt.verify(req.session.jwt , process.env.JWT_KEY!);
    //     res.send({currentUser : payload});
    // }
    // catch(err){
    //     res.send({
    //         currentUser : null
    //     })
    // }

    res.send({
        currentUser : req.currentUser || null
    });

});

export {router as currentUserRouter};