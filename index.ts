import express from 'express';
import {router} from "./src/router/router";
import mongoose from "mongoose";
import cors from "cors"
import fileUpload from "express-fileupload";
mongoose.connect('mongodb://127.0.0.1:27017/music').then(
    ()=>{
        console.log('Connected')}
).catch((err)=>{
    console.log(err)
})
const app = express();
app.use(fileUpload({
    createParentPath: true
}));
app.use(cors());
app.use(express.json());
app.use ('', router)
app.listen(8080,()=>{
    console.log('Sever is running ')
})