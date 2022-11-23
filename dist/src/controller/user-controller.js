"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../model/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
class UserController {
    constructor() {
        this.register = async (req, res) => {
            let user = req.body;
            let checkUsername = await user_1.User.findOne({
                username: user.username,
            });
            if (checkUsername) {
                return res.status(200).json({
                    message: 'User name exist'
                });
            }
            else if (user.username === '' && user.password === '') {
                return res.status(200).json({
                    message: 'User name or password is empty!'
                });
            }
            else if (user.username.length < 6) {
                return res.status(200).json({
                    message: 'Invalid name!!'
                });
            }
            else if (user.password.length < 6 || user.password.length > 8) {
                return res.status(200).json({
                    message: 'Invalid password!!'
                });
            }
            else if (user.phoneNumber.length <= 9) {
                return res.status(200).json({
                    message: 'Invalid phone number!!'
                });
            }
            else {
                user.password = await bcrypt_1.default.hash(user.password, 10);
                user = await user_1.User.create(user);
                return res.status(201).json(user);
            }
        };
        this.login = async (req, res) => {
            let user = req.body;
            let userFind = await user_1.User.findOne({
                username: user.username
            });
            if (!userFind) {
                return res.status(200).json({
                    message: 'User is not exist!'
                });
            }
            else {
                let compare = await bcrypt_1.default.compare(user.password, userFind.password);
                if (!compare) {
                    return res.status(200).json({
                        message: 'Password incorrect!'
                    });
                }
                else {
                    let payload = {
                        idUser: userFind._id,
                        username: userFind.username
                    };
                    let token = await jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                        expiresIn: 36000
                    });
                    return res.status(200).json({
                        token: token
                    });
                }
            }
        };
        this.changePassword = async (req, res) => {
            let idUser = req.params.id;
            const userFind = await user_1.User.findOne({
                _id: idUser
            });
            if (!userFind) {
                return res.status(200).json({
                    message: 'Id user is not exist'
                });
            }
            else {
                let oldPassword = req.body.oldPassword;
                let compare = await bcrypt_1.default.compare(oldPassword, userFind.password);
                if (!compare) {
                    return res.status(200).json({
                        message: 'Password not exist'
                    });
                }
                else {
                    let newPassword = req.body.newPassword;
                    newPassword = await bcrypt_1.default.hash(newPassword, 10);
                    await user_1.User.updateOne({ _id: idUser }, { $set: { password: newPassword } });
                    return res.status(200).json({
                        message: 'Change password success'
                    });
                }
            }
        };
        this.findAll = async (req, res) => {
            let user = await user_1.User.find();
            return res.status(200).json({
                user
            });
        };
    }
}
exports.default = new UserController();
//# sourceMappingURL=user-controller.js.map