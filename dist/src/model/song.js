"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = void 0;
const mongoose_1 = require("mongoose");
const SongSchema = new mongoose_1.Schema({
    name: String
});
const Song = (0, mongoose_1.model)('Song', SongSchema);
exports.Song = Song;
//# sourceMappingURL=song.js.map