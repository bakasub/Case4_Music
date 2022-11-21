"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: String,
    password: String,
    role: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Role',
        default: {
            _id: "637ad1cde8b7624133bd9792",
            name: "user"
        }
    }
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.User = User;
//# sourceMappingURL=user.js.map