"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistLike = void 0;
const mongoose_1 = require("mongoose");
const playlistLikeSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user"
    },
    playlist: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "playlist"
    },
});
const PlaylistLike = (0, mongoose_1.model)("playlistLike", playlistLikeSchema);
exports.PlaylistLike = PlaylistLike;
//# sourceMappingURL=playlist-like.js.map