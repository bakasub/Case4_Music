"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.SECRET = void 0;
exports.SECRET = 'Secret';
const auth = (req, res, next) => {
    let authorization = req.headers.authorization;
    if (authorization) {
    }
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map