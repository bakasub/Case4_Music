"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song1 = void 0;
const mongoose_1 = require("mongoose");
let Song1Schema = new mongoose_1.Schema({
    name: String,
    singer: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Singer'
    }
});
const Song1 = (0, mongoose_1.model)('Song1', Song1Schema);
exports.Song1 = Song1;
//# sourceMappingURL=song1.js.map