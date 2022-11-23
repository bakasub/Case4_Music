import express from 'express';
import mongoose from "mongoose";
import {router} from "./src/router/router";
import cors from 'cors';
const URL_MG='mongodb://127.0.0.1:27017/case4_backend'
const app = express();

mongoose.connect(URL_MG).then(() => {
    console.log('Connect success')
}).catch((err) => {
    console.log(err.message)
});

app.use(cors());
app.use(express.json());
app.use('',router);
app.listen(8080, () => {
    console.log('Server is running')
})