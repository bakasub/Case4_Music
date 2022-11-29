"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singer_1 = require("../model/singer");
class SingerController {
    constructor() {
        this.getAll = async (req, res) => {
            let products = await singer_1.Singer.find();
            return res.status(200).json(products);
        };
        this.save = async (req, res) => {
            let product = await singer_1.Singer.create(req.body);
            await product.save();
            return res.status(200).json(product);
        };
        this.remove = async (req, res) => {
            let id = req.params.id;
            await singer_1.Singer.deleteOne({ _id: id });
            return res.status(200).json({ message: `delete false` });
        };
        this.findIdEdit = async (req, res) => {
            let id = req.params.id;
            let product = await singer_1.Singer.find({ _id: id });
            return res.status(200).json(product);
        };
        this.update = async (req, res) => {
            let id = req.params.id;
            await singer_1.Singer.updateOne({ _id: id }, { $set: req.body });
            return res.status(200).json({ message: `update success` });
        };
    }
}
exports.default = new SingerController();
//# sourceMappingURL=singer-controller.js.map