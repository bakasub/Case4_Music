"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const mongoose_1 = require("mongoose");
const roleSchema = new mongoose_1.Schema({
    name: String,
});
const Role = (0, mongoose_1.model)('Role', roleSchema);
exports.Role = Role;
//# sourceMappingURL=role.js.map