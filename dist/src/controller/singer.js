"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Singer {
    constructor() {
        this.getAll = async (req, res) => {
            let products = await Singer.find().populate('category', 'name');
            return res.status(200).json(products);
        };
        this.save = async (req, res) => {
            let product = await Singer.create(req.body);
            await product.save();
            return res.status(200).json(product);
        };
        this.remove = async (req, res) => {
            let id = req.params.id;
            await Singer.deleteOne({ _id: id });
            return res.status(200).json({ message: `delete false` });
        };
        this.findIdEdit = async (req, res) => {
            let id = req.params.id;
            let product = await Singer.findById({ id });
            return res.status(200).json(product);
        };
        this.update = async (req, res) => {
            let id = req.params.id;
            await Singer.updateOne({ _id: id }, { $set: req.body });
            return res.status(200).json({ message: `update success` });
        };
    }
}
exports.default = new Singer();
//# sourceMappingURL=singer.js.map