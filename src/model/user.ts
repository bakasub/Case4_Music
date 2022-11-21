import {Schema, model} from 'mongoose'
export interface IUser {
    username ?: string;
    password ?: string;
}

const userSchema = new Schema<IUser>({
    username: String,
    password: String
});

const User = model<IUser>('user', userSchema);
export {User};