"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playlistRouter = void 0;
const express_1 = require("express");
const playlist_controller_1 = __importDefault(require("../controller/playlist-controller"));
exports.playlistRouter = (0, express_1.Router)();
exports.playlistRouter.post('/create', playlist_controller_1.default.createPlaylist);
//# sourceMappingURL=playlist-router.js.map