"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const music_1 = require("../model/music");
class MusicController {
    constructor() {
        this.getAll = async (req, res) => {
            let products = await music_1.Music.find();
            return res.status(200).json(products);
        };
        this.save = async (req, res) => {
            let product = await music_1.Music.create(req.body);
            await product.save();
            return res.status(200).json(product);
        };
        this.remove = async (req, res) => {
            let id = req.params.id;
            await music_1.Music.deleteOne({ _id: id });
            return res.status(200).json({ message: `delete false` });
        };
        this.findIdEdit = async (req, res) => {
            let id = req.params.id;
            let product = await music_1.Music.findById({ id });
            return res.status(200).json(product);
        };
        this.update = async (req, res) => {
            let id = req.params.id;
            await music_1.Music.updateOne({ _id: id }, { $set: req.body });
            console.log(id);
            return res.status(200).json({ message: `update success` });
        };
    }
}
exports.default = new MusicController();
//# sourceMappingURL=music-controller.js.map