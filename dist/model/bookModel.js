"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bookSchema = new mongoose_1.default.Schema({
    author: String,
    title: String,
    summary: String,
    ISBN: String,
    authorImage: String,
    coverImage: String,
    views: []
}, { timestamps: true });
exports.default = mongoose_1.default.model("myBook", bookSchema);
