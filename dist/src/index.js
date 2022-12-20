"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = process.env.port || 7000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
const cors_1 = __importDefault(require("cors"));
require("../config/db");
const bookstoreRouter_1 = __importDefault(require("../router/bookstoreRouter"));
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.status(200).json({
        message: "server running"
    });
});
app.use("/api", bookstoreRouter_1.default);
app.listen(port, () => {
    console.log(`server up on: ${port}`);
});
