"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../model/user");
class UserController {
    constructor() {
        this.getAll = async (req, res) => {
            let users = await user_1.User.find();
            console.log(users);
            return res.status(200).json(users);
        };
        this.addUser = async (req, res) => {
            await user_1.User.insertMany(req.body);
            return res.status(200).json({
                message: "add success"
            });
        };
    }
}
exports.default = new UserController();
//# sourceMappingURL=user-comtroller.js.map