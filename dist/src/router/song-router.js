"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.songRouter = void 0;
const express_1 = require("express");
const song_controller_1 = __importDefault(require("../controller/song-controller"));
exports.songRouter = (0, express_1.Router)();
exports.songRouter.get('/', song_controller_1.default.getAll);
exports.songRouter.post('/', song_controller_1.default.addSong);
exports.songRouter.get('/search', song_controller_1.default.findByName);
exports.songRouter.put('/:id', song_controller_1.default.editSong);
exports.songRouter.delete('/:id', song_controller_1.default.deleteSong);
exports.songRouter.get('/:id', song_controller_1.default.filterSongByID);
//# sourceMappingURL=song-router.js.map