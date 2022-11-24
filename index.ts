import express from 'express';
import {singerRouter} from "./src/router/singer-router";
import mongoose from "mongoose";
import cors from "cors"
mongoose.connect('mongodb://127.0.0.1:27017/music').then(
    ()=>{
        console.log('Connected')}
).catch((err)=>{
    console.log(err)
})
const app = express();
app.use(cors());
app.use(express.json());
app.use ('', singerRouter)
app.listen(8080,()=>{
    console.log('Sever is running ')
})