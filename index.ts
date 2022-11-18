import express from "express";
import  mongoose from "mongoose";
import {router} from "./src/router/router";
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/music').then(() => {
    console.log('Connection Success');
}).catch((err) => {
    console.log(err.message);
})
app.use(express.json())
app.use('',router)
app.listen(8080, ()=>{
    console.log('Server up on 8080')
})
