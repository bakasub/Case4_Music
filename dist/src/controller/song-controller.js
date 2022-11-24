"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const song_1 = require("../model/song");
class SongController {
    constructor() {
        this.getAll = async (req, res) => {
            let songs = await song_1.Song.find().populate("user");
            return res.status(200).json(songs);
        };
        this.addSong = async (req, res) => {
            await song_1.Song.insertMany(req.body);
            return res.status(200).json({
                message: "add success"
            });
        };
        this.editSong = async (req, res) => {
            await song_1.Song.updateMany({ _id: req.params.id }, req.body);
            return res.status(200).json({
                message: "edit success"
            });
        };
        this.deleteSong = async (req, res) => {
            await song_1.Song.deleteOne({ _id: req.params.id });
            return res.status(200).json({
                message: "delete success"
            });
        };
        this.filterSongByID = async (req, res) => {
            let song = await song_1.Song.findById(req.params.id);
            res.status(200).json(song);
        };
        this.findByName = async (req, res) => {
            let findSong = await song_1.Song.find({
                $or: [
                    { name: new RegExp(req.body.keyWord, 'i') },
                    { artist: new RegExp(req.body.keyWord, 'i') }
                ]
            });
            return res.status(201).json(findSong);
        };
    }
}
exports.default = new SongController();
//# sourceMappingURL=song-controller.js.map