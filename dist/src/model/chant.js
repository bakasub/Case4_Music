"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chant = void 0;
const mongoose_1 = require("mongoose");
const ChantSchema = new mongoose_1.Schema({
    name: String,
});
const Chant = (0, mongoose_1.model)('Chant', ChantSchema);
exports.Chant = Chant;
//# sourceMappingURL=chant.js.map