"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playlistRouter = void 0;
const express_1 = require("express");
const playlist_controller_1 = __importDefault(require("../controller/playlist-controller"));
const playlistSongs_controller_1 = __importDefault(require("../controller/playlistSongs-controller"));
exports.playlistRouter = (0, express_1.Router)();
exports.playlistRouter.get('/song', playlistSongs_controller_1.default.findAll);
exports.playlistRouter.post('/song', playlistSongs_controller_1.default.addPLSong);
exports.playlistRouter.delete('/song/:id', playlistSongs_controller_1.default.deletePLSong);
exports.playlistRouter.get('/user/:idUser', playlist_controller_1.default.filterByUser);
exports.playlistRouter.get('/', playlist_controller_1.default.getAll);
exports.playlistRouter.post('/', playlist_controller_1.default.createPlaylist);
exports.playlistRouter.put('/:id', playlist_controller_1.default.editPlaylist);
exports.playlistRouter.delete('/:id', playlist_controller_1.default.deletePlaylist);
exports.playlistRouter.get('/:id', playlist_controller_1.default.findPlaylist);
//# sourceMappingURL=playlist-router.js.map