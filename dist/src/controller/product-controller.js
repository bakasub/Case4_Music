"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
class ProductController {
    constructor() {
        this.create = async (req, res) => {
            await product_1.Product.insertMany(req.body);
            return res.status(201).json({
                message: 'Create success'
            });
        };
        this.show = async (req, res) => {
            let product = await product_1.Product.find();
            return res.status(200).json(product);
        };
    }
}
exports.default = new ProductController();
//# sourceMappingURL=product-controller.js.map