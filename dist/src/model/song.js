"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = void 0;
const mongoose_1 = require("mongoose");
const songSchema = new mongoose_1.Schema({
    User: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    },
    name: String,
    artist: String,
    image: String,
    file: String,
    date: String,
    description: String,
    composer: String
});
const Song = (0, mongoose_1.model)('Song', songSchema);
exports.Song = Song;
//# sourceMappingURL=song.js.map