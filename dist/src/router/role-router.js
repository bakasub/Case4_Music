"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleRouter = void 0;
const express_1 = require("express");
const role_controller_1 = __importDefault(require("../controller/role-controller"));
exports.roleRouter = (0, express_1.Router)();
exports.roleRouter.post('/role', role_controller_1.default.save);
//# sourceMappingURL=role-router.js.map