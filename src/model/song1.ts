import {Schema, model} from 'mongoose'
import {ISinger} from "./singer";
export interface ISong1 {
    name ?: string;
    singer?:ISinger;


}
let Song1Schema = new Schema<ISong1>({
    name : String,
    singer:{
        type: Schema.Types.ObjectId,
        ref: 'Singer'
    }

});


const Song1 = model<ISong1>('Song1', Song1Schema);
export {Song1};