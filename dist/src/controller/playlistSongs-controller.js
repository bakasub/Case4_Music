"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const songList_playlist_1 = require("../model/songList-playlist");
class PlaylistSongsController {
    constructor() {
        this.findAll = async (req, res) => {
            let songList = await songList_playlist_1.PlaylistSongs.find().populate("user")
                .populate("playlist")
                .populate("song");
            return res.status(200).json(songList);
        };
        this.addSong = async (req, res) => {
            await songList_playlist_1.PlaylistSongs.insertMany(req.body);
            return res.status(200).json({
                message: "add success"
            });
        };
    }
}
exports.default = new PlaylistSongsController();
//# sourceMappingURL=playlistSongs-controller.js.map