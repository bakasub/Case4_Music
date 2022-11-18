import {Request, Response} from "express";
import {User} from "../model/user";
class UserController{
    getAll =async (req:Request,res:Response)=>{
        let users = await User.find();
        console.log(users);

        return res.status(200).json(users);
    }
    addUser = async (req:Request,res:Response)=>{
        await User.insertMany(req.body);
        return res.status(200).json({
            message: "add success"
        })
    }
}
export default new UserController();