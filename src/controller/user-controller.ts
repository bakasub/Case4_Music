import {User} from "../model/user";
import {Request, Response} from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {SECRET} from "../middleware/auth";

class UserController {
    register = async (req: Request, res: Response) => {
        let user = req.body;
        let checkUsername = await User.findOne({
            username: user.username,
        });
        if (checkUsername) {
            return res.status(200).json({
                message: 'User name exist'
            })
        } else if (user.username === '' && user.password === '') {
            return res.status(200).json({
                message: 'User name or password is empty!'
            })

        } else if (user.username.length < 6) {
            return res.status(200).json({
                message: 'Invalid name!!'
            })
        } else if (user.password.length < 6 || user.password.length > 8) {
            return res.status(200).json({
                message: 'Invalid password!!'
            })
        } else if (user.phoneNumber.length <= 9) {
            return res.status(200).json({
                message: 'Invalid phone number!!'
            })
        } else {
            user.password = await bcrypt.hash(user.password, 10);
            user = await User.create(user);
            return res.status(201).json(user)
        }

    };

    login = async (req: Request, res: Response) => {
        let user = req.body;
        let userFind = await User.findOne({
            username: user.username
        })
        if (!userFind) {
            return res.status(200).json({
                message: 'User is not exist!'
            })
        } else {
            let compare = await bcrypt.compare(user.password, userFind.password)
            if (!compare) {
                return res.status(200).json({
                    message: 'Password incorrect!'
                });
            } else {
                let payload = {
                    idUser: userFind._id,
                    username: userFind.username
                }
                let token = await jwt.sign(payload, SECRET, {
                    expiresIn: 36000
                });
                return res.status(200).json({
                    token: token,
                    id: userFind._id
                })
            }
        }
    };

    changePassword = async (req: Request, res: Response) => {
        let idUser = req.params.id
        const userFind = await User.findOne({
            _id: idUser
        })
        if (!userFind) {
            return res.status(200).json({
                message: 'Id user is not exist'
            })
        } else {
            let oldPassword = req.body.oldPassword;
            let compare = await bcrypt.compare(oldPassword, userFind.password);
            if (!compare) {
                return res.status(200).json({
                    message: 'Password not exist'
                })
            } else {
                let newPassword = req.body.newPassword;
                newPassword = await bcrypt.hash(newPassword, 10);
                await User.updateOne({_id: idUser}, {$set: {password: newPassword}})
                return res.status(200).json({
                    message: 'Change password success'
                })
            }
        }
    }

}

export default new UserController();