"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const song_1 = require("../model/song");
class SongController {
    constructor() {
        this.findAll = async (req, res) => {
            let categories = await song_1.Song.find();
            return res.status(200).json(categories);
        };
        this.save = async (req, res) => {
            let category = req.body;
            category = await song_1.Song.create(category);
            return res.status(201).json(category);
        };
    }
}
exports.default = new SongController();
//# sourceMappingURL=song-controller.js.map