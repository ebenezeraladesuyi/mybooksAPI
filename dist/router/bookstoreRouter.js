"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("../config/multer"));
const bookstoreController_1 = require("../controller/bookstoreController");
const router = (0, express_1.Router)();
router.route("/postbook").post(multer_1.default, bookstoreController_1.bookPost);
router.route("/getall").get(bookstoreController_1.getAllBooks);
router.route("/getone/:id").get(bookstoreController_1.getOneBook);
router.route("/search").get(bookstoreController_1.searchBooks);
router.route("/views/:id").patch(bookstoreController_1.myViews);
exports.default = router;
