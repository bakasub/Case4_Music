"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountController = void 0;
const account_1 = require("../model/account");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
class AccountController {
    constructor() {
        this.register = async (req, res) => {
            let user = req.body;
            let checkUsername = await account_1.Account.findOne({
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
                user = await account_1.Account.create(user);
                return res.status(201).json(user);
            }
        };
        this.login = async (req, res) => {
            let user = req.body;
            let userFind = await account_1.Account.findOne({
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
    }
}
exports.AccountController = AccountController;
exports.default = new AccountController();
r();
//# sourceMappingURL=account-controller.js.map