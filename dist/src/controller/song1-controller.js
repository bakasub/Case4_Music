"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const song1_1 = require("../model/song1");
class Song1Controller {
    constructor() {
        this.findAll = async (req, res) => {
            let categories = await song1_1.Song1.find();
            return res.status(200).json(categories);
        };
        this.save = async (req, res) => {
            let category = req.body;
            category = await song1_1.Song1.create(category);
            return res.status(201).json(category);
        };
    }
}
exports.default = new Song1Controller();
//# sourceMappingURL=song1-controller.js.map