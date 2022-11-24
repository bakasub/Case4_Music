"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chant_1 = require("../model/chant");
class ChantController {
    constructor() {
        this.findAll = async (req, res) => {
            let categories = await chant_1.Chant.find();
            return res.status(200).json(categories);
        };
        this.save = async (req, res) => {
            let category = req.body;
            category = await chant_1.Chant.create(category);
            return res.status(201).json(category);
        };
    }
}
exports.default = new ChantController();
//# sourceMappingURL=chant-controller.js.map