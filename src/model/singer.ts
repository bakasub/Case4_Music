import {Schema,model} from 'mongoose';
export interface ISinger {
    name ?: string;
    band ?: string;
    description?:string;
    image ?:string;

    
}
let SingerSchema = new Schema<ISinger>({
    name:String,
    band: String,
    description:String,
    image:String,

});

const Singer = model<ISinger>('Singer',SingerSchema);
export {Singer}