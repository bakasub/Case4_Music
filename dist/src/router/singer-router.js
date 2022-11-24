"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.singerRouter = void 0;
const express_1 = require("express");
const chant_router_1 = require("./chant-router");
const singer_controller_1 = __importDefault(require("../controller/singer-controller"));
exports.singerRouter = (0, express_1.Router)();
exports.singerRouter.get('/musics', singer_controller_1.default.getAll);
exports.singerRouter.post('/musics', singer_controller_1.default.save);
exports.singerRouter.delete('/musics/:id', singer_controller_1.default.remove);
exports.singerRouter.put('/musics/:id', singer_controller_1.default.update);
exports.singerRouter.get('/musics/:id', singer_controller_1.default.findIdEdit);
exports.singerRouter.use('/categories', chant_router_1.chantRouter);
//# sourceMappingURL=singer-router.js.map