import {Schema,model} from 'mongoose';
import {IChant} from "./chant";
interface ISinger {
    name ?: string;
    band ?: string;
    description?:string;
    image ?:string;
    chant ?: IChant;
    
}
let SingerSchema = new Schema<ISinger>({
    name:String,
    band: String,
    description:String,
    image:String,
    chant : {
        type: Schema.Types.ObjectId,
        ref: 'Chant'
    }
});

const Singer = model<ISinger>('Singer',SingerSchema);
export {Singer}