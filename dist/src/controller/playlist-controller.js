"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const playlist_1 = require("../model/playlist");
class PlaylistController {
    constructor() {
        this.createPlaylist = async (req, res) => {
            let playlist = req.body;
            playlist.password = await bcrypt_1.default.hash(playlist.password, 10);
            playlist = await playlist_1.Playlist.create(playlist);
            return res.status(201).json(playlist);
        };
    }
}
exports.default = new PlaylistController();
//# sourceMappingURL=playlist-controller.js.map