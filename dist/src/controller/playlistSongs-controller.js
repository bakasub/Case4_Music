"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const songList_playlist_1 = require("../model/songList-playlist");
class PlaylistSongsController {
    constructor() {
        this.getAll = async (req, res) => {
            let songList = await songList_playlist_1.PlaylistSongs.find().populate("playlist")
                .populate("song");
            return res.status(200).json(songList);
        };
        this.addSongToPL = async (req, res) => {
            await songList_playlist_1.PlaylistSongs.insertMany(req.body);
            return res.status(200).json({
                message: "add success"
            });
        };
        this.deletePLSong = async (req, res) => {
            await songList_playlist_1.PlaylistSongs.deleteOne({ _id: req.params.id });
            return res.status(200).json({
                message: "delete success"
            });
        };
        this.getSongsFromAPL = async (req, res) => {
            let songList = await songList_playlist_1.PlaylistSongs.find({
                playlist: req.params.id
            });
            return res.status(200).json(songList);
        };
    }
}
exports.default = new PlaylistSongsController();
//# sourceMappingURL=playlistSongs-controller.js.map