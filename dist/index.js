"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const singer_router_1 = require("./src/router/singer-router");
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
mongoose_1.default.connect('mongodb://127.0.0.1:27017/music').then(() => {
    console.log('Connected');
}).catch((err) => {
    console.log(err);
});
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('', singer_router_1.singerRouter);
app.listen(8080, () => {
    console.log('Sever is running ');
});
//# sourceMappingURL=index.js.map