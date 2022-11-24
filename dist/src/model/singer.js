"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singer = void 0;
const mongoose_1 = require("mongoose");
let SingerSchema = new mongoose_1.Schema({
    name: String,
    band: String,
    description: String,
    image: String,
    chant: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Chant'
    }
});
const Singer = (0, mongoose_1.model)('Singer', SingerSchema);
exports.Singer = Singer;
//# sourceMappingURL=singer.js.map