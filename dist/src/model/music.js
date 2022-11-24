"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Music = void 0;
const mongoose_1 = require("mongoose");
let ProductSchema = new mongoose_1.Schema({
    name: String,
    band: String,
    description: String,
    image: String,
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Category'
    }
});
const Music = (0, mongoose_1.model)('Music', ProductSchema);
exports.Music = Music;
//# sourceMappingURL=music.js.map