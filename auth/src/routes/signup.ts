import express , {Request , Response} from 'express'
import { body , validationResult } from 'express-validator'
import  User from '../models/user';
import { BadRequestError } from '@tyagiy006/common';
import jwt from 'jsonwebtoken';
import { validateRequest } from '@tyagiy006/common';

const router = express.Router();

router.post('/api/users/signup' ,[
    body('email').isEmail().withMessage('Email must be valid') ,
    body('password').trim().isLength({min: 4 , max: 20
    }).withMessage('Passowrd must be between 4 and 20 characters')
] , validateRequest , async (req : Request , res : Response) : Promise<any> => {
    
    // const { email , password } = req.body;
    
    //Manual validation
    // if(!email || typeof email !== 'string'){
    //     res.status(400).send("Provide a valid email address");
    // }

    const { email , password } = req.body;
    const existingUser = await User.findOne({email});

    if(existingUser){
        throw new BadRequestError('Email in use');
    }

    const newUser = User.build({ email , password});
    await newUser.save();

    //Generate JWT
    const userJwt = jwt.sign({
        id : newUser.id,
        email : newUser.email
    } , process.env.JWT_KEY!); 

    //Store it on session object
    req.session = {
        jwt : userJwt
    };

    return res.status(201).send({ message: 'User signed up successfully' });
});

export {router as signupRouter};