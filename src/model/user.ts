import {Schema, model} from 'mongoose';
import {IRole, Role} from "./role";

interface IUser {
    username?: String,
    password?: String,
    role?: IRole
}

const userSchema = new Schema<IUser>({

    username: String,
    password: String,
    role: {
        type: Schema.Types.ObjectId,
        ref: 'Role',
        default :{
            _id : "637ad1cde8b7624133bd9792",
            name: "user"
        }

    }

});
const User = model<IUser>('User', userSchema);
export {User}
