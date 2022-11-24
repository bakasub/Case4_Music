import {Schema, model} from 'mongoose'
export interface IChant {
    name ?: string;


}
const ChantSchema = new Schema<IChant>({
    name : String,

});
const Chant = model<IChant>('Chant', ChantSchema);
export {Chant};