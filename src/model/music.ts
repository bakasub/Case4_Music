import {Schema,model} from 'mongoose';
interface IMusic {
    name ?: string;
    band ?: string;
    description?:string;
    image ?:string;
    
}
let ProductSchema = new Schema<IMusic>({
    name:String,
    band: String,
    description:String,
    image:String,
});

const Music = model<IMusic>('Music',ProductSchema);
export {Music}