"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const playlist_router_1 = require("./playlist-router");
exports.router = (0, express_1.Router)();
exports.router.use('', playlist_router_1.playlistRouter);
//# sourceMappingURL=router.js.map