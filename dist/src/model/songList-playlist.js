"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistSongs = void 0;
const mongoose_1 = require("mongoose");
const playlistSongsSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user"
    },
    playlist: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "playlist"
    },
    song: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "song",
    }
});
const PlaylistSongs = (0, mongoose_1.model)("playlistSongs", playlistSongsSchema);
exports.PlaylistSongs = PlaylistSongs;
//# sourceMappingURL=songList-playlist.js.map