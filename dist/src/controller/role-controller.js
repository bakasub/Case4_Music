"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const role_1 = require("../model/role");
class RoleController {
    constructor() {
        this.save = async (req, res) => {
            let role = req.body;
            role = await role_1.Role.create(role);
            return res.status(201).json(role);
        };
    }
}
exports.default = new RoleController();
//# sourceMappingURL=role-controller.js.map