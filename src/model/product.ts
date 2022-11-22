import {model, Schema} from "mongoose";
interface IProduct{
    name?:String,
    price?:Number
}
const productSchema=new Schema<IProduct>({
    name:String,
    price:String
});
const Product=model<IProduct>('Product',productSchema);
export {Product}