import {Schema, model} from 'mongoose';

interface IUser {
    username?: String,
    password?: String,
}

const userSchema = new Schema<IUser>({
    username: String,
    password: String,
});
const User = model<IUser>('User', userSchema);
export {User}
