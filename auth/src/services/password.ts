import { scrypt , randomBytes } from 'crypto';
import { promisify } from 'util';

//Scrypt is a password hashing function which is callback based 
//and we need to convert it to promise based
const scryptAsync = promisify(scrypt);

export default class Password{
    static async toHash(password: string){
        const salt = randomBytes(8).toString('hex');
        //scrypt returns a buffer of characters
        const buf = (await scryptAsync(password , salt , 64)) as Buffer;
        return `${buf.toString('hex')}.${salt}`; 
    }

    static async compare(storedPassword: string , suppliedPassword: string){
        const [hashedPassword , salt] = storedPassword.split('.');
        const buf = (await scryptAsync(suppliedPassword , salt , 64)) as Buffer;
        return buf.toString('hex') === hashedPassword;
    }
}