"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.songRouter = void 0;
const express_1 = require("express");
const song_controller_1 = __importDefault(require("../controller/song-controller"));
exports.songRouter = (0, express_1.Router)();
exports.songRouter.get('/song', song_controller_1.default.getAll);
exports.songRouter.post('/song', song_controller_1.default.addSong);
exports.songRouter.put('/song/:id', song_controller_1.default.editSong);
exports.songRouter.delete('/song/:id', song_controller_1.default.deleteSong);
exports.songRouter.get('/song/:id', song_controller_1.default.findByNameSong);
//# sourceMappingURL=song-router.js.map