"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const song_router_1 = require("./song-router");
const singer_controller_1 = __importDefault(require("../controller/singer-controller"));
exports.router = (0, express_1.Router)();
exports.router.get('/musics', singer_controller_1.default.getAll);
exports.router.post('/musics', singer_controller_1.default.save);
exports.router.delete('/musics/:id', singer_controller_1.default.remove);
exports.router.put('/musics/:id', singer_controller_1.default.update);
exports.router.get('/musics/:id', singer_controller_1.default.findIdEdit);
exports.router.use('/categories', song_router_1.songRouter);
//# sourceMappingURL=router.js.map