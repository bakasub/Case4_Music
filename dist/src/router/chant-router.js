"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chantRouter = void 0;
const express_1 = require("express");
const chant_controller_1 = __importDefault(require("../controller/chant-controller"));
exports.chantRouter = (0, express_1.Router)();
exports.chantRouter.get('/', chant_controller_1.default.findAll);
exports.chantRouter.post('/', chant_controller_1.default.save);
//# sourceMappingURL=chant-router.js.map