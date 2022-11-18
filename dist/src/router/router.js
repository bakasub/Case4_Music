"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const music_controller_1 = __importDefault(require("../controller/music-controller"));
exports.router = (0, express_1.Router)();
exports.router.get('/musics', music_controller_1.default.getAll);
exports.router.post('/musics', music_controller_1.default.save);
exports.router.delete('/musics/:id', music_controller_1.default.remove);
exports.router.put('/musics/:id', music_controller_1.default.update);
exports.router.get('/musics/:id', music_controller_1.default.findIdEdit);
//# sourceMappingURL=router.js.map