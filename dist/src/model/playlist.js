"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playlist = void 0;
const mongoose_1 = require("mongoose");
const playlistSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user"
    },
    playlistName: String,
    createDate: String,
});
const Playlist = (0, mongoose_1.model)("playlist", playlistSchema);
exports.Playlist = Playlist;
//# sourceMappingURL=playlist.js.map