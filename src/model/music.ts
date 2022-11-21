import {Schema,model} from 'mongoose';
import {ICategory} from "./category";
interface IMusic {
    name ?: string;
    band ?: string;
    description?:string;
    image ?:string;
    category ?: ICategory;
    
}
let ProductSchema = new Schema<IMusic>({
    name:String,
    band: String,
    description:String,
    image:String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
});

const Music = model<IMusic>('Music',ProductSchema);
export {Music}