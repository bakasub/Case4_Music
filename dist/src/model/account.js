"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: String,
    password: String,
    phoneNumber: String
});
const Account = (0, mongoose_1.model)('Account', userSchema);
exports.Account = Account;
//# sourceMappingURL=account.js.map