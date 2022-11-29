"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.song1Router = void 0;
const express_1 = require("express");
const song1_controller_1 = __importDefault(require("../controller/song1-controller"));
exports.song1Router = (0, express_1.Router)();
exports.song1Router.get('/', song1_controller_1.default.findAll);
exports.song1Router.post('/', song1_controller_1.default.save);
//# sourceMappingURL=song1-router.js.map