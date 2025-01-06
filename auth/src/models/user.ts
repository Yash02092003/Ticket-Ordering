import mongoose from 'mongoose';
import Password from '../services/password';

//An interface that describes the properties
//that are required to create a new User
interface UserAttrs {
    email: string;
    password: string;
}

//An interface the describes the properties
//that a User Model has
interface UserModel extends mongoose.Model<UserDoc>{
    build(attrs: UserAttrs): UserDoc;
}

//mongoose.Model<T> --> Passing UserDoc as T Ensures that 
//the model will be type safe and work with the documents of type UserDoc

//An interface that describes the properties
//that a User Document has
interface UserDoc extends mongoose.Document{
    email: string;
    password: string;
}

import { Schema , model } from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { //Passinng in a second object to define how to convert document to JSON
    toJSON: {
        transform(doc , ret){
            ret.id = ret._id
            delete ret.password;
            delete ret.__v;
            delete ret._id;
        }
    }
})

//Adding Pre Save Hook to Has the Password
//this is gives the access to current document that we are trying to save
//don't use a arrow function as it will change the pointing of this and change it to whole file
//document.get() ise used to get value of a property
//document.set() is used to set value of a property
userSchema.pre('save' , async function(done){
    if(this.isModified('password')){
        const hashed = await Password.toHash(this.get('password'));
        this.set('password' , hashed);
    }
    done();
})

//Adding Build Function to statics Property for building New User
userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
}

//mongoose.model<T extends the document , U extends Model<T>>
//Eventually this function will return a model of U
const User = model<UserDoc, UserModel>('User' , userSchema);

//First Approach
// const buildUser = (attrs : UserAttrs) => {
//     return new User(attrs);
// }

//Second Approach
// User.build({
//     email: 'test@test.com',
//     password: 'password'
// })


export default User;