"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playlist_1 = require("../model/playlist");
class PlaylistController {
    constructor() {
        this.getAll = async (req, res) => {
            let allPlaylist = await playlist_1.Playlist.find().populate("user");
            return res.status(200).json(allPlaylist);
        };
        this.createPlaylist = async (req, res) => {
            await playlist_1.Playlist.insertMany(req.body);
            return res.status(201).json({
                message: "add success"
            });
        };
        this.editPlaylist = async (req, res) => {
            await playlist_1.Playlist.updateOne({ _id: req.params.id }, req.body);
            return res.status(200).json({
                message: "edit success"
            });
        };
        this.deletePlaylist = async (req, res) => {
            await playlist_1.Playlist.deleteOne({ _id: req.params.id });
            return res.status(200).json({
                message: "delete success"
            });
        };
        this.findPlaylist = async (req, res) => {
            let playlist = await playlist_1.Playlist.findById(req.params.id);
            res.status(200).json(playlist);
        };
        this.filterByUser = async (req, res) => {
            let userPlaylist = await playlist_1.Playlist.find({
                user: req.params.idUser
            });
            return res.status(200).json(userPlaylist);
        };
        this.getToken = async (req) => {
            return await req.decode;
        };
    }
}
exports.default = new PlaylistController();
//# sourceMappingURL=playlist-controller.js.map