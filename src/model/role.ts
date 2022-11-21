import {Schema, model} from 'mongoose';

export interface IRole {
    name?: String,
}

const roleSchema = new Schema<IRole>({
    name: String,
});
const Role = model<IRole>('Role', roleSchema);
export {Role}
