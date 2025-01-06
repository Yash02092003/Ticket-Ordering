import express from 'express'
import { body } from 'express-validator';
import { Request , Response } from 'express';
import { validateRequest } from '@tyagiy006/common';
import User from '../models/user';
import { BadRequestError } from '@tyagiy006/common';
import Password from '../services/password';
import jwt from 'jsonwebtoken';
const router = express.Router();

router.get('/api/users/signin' , [
    body('email').isEmail().withMessage('Email must be valid') ,
    body('password').trim().notEmpty().withMessage('You must Give a Valid Password')
] , validateRequest , async  (req : Request, res : Response) : Promise<any> => {
    const { email , password } = req.body;
    const existingUser = await User.findOne({email});
    if(!existingUser){
        throw new BadRequestError('Invalid Login Credentials');
    }
    const passwordMatch = await Password.compare(existingUser.password , password);
    if(!passwordMatch){
        throw new BadRequestError('Invalid Login Credentials');
    }

    //Generate JWT
    const userJwt = jwt.sign( {
        id : existingUser.id ,
        email : existingUser.email
    } , process.env.JWT_KEY!);

    req.session = {
        jwt : userJwt
    }
    console.log('Cookie Generated' , req.session.jwt);
    res.send(existingUser);

});

export {router as signinRouter};