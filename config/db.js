"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const URI = "mongodb://localhost/ebookstore";
const ebenURI = "mongodb+srv://eben1909:ebenezer-19@cluster0.u3wri8y.mongodb.net/bookstore?retryWrites=true&w=majority";
mongoose_1.default.connect(ebenURI);
mongoose_1.default.connection.on("open", () => {
    console.log("database now connected");
}).once("error", (error) => {
    console.log(`error with database`);
});
