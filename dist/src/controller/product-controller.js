"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
class ProductController {
    constructor() {
        this.getAll = async (req, res) => {
            let products = await product_1.Product.find();
            return res.status(200).json(products);
        };
        this.save = async (req, res) => {
            let product = await product_1.Product.create(req.body);
            await product.save();
            return res.status(200).json(product);
        };
        this.remove = async (req, res) => {
            let id = req.params.id;
            await product_1.Product.deleteOne({ _id: id });
            return res.status(200).json({ message: `delete false` });
        };
        this.findIdEdit = async (req, res) => {
            let id = req.params.id;
            let product = await product_1.Product.findById({ id });
            return res.status(200).json(product);
        };
        this.update = async (req, res) => {
            let id = req.params.id;
            await product_1.Product.updateOne({ _id: id }, { $set: req.body });
            console.log(id);
            return res.status(200).json({ message: `update success` });
        };
    }
}
exports.default = new ProductController();
//# sourceMappingURL=product-controller.js.map