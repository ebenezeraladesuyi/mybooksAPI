import { Router } from "express";
import coverUpload from "../config/multer";
import { bookPost, getAllBooks, getOneBook, myViews, searchBooks } from "../controller/bookstoreController"


const router = Router()

router.route("/postbook").post(coverUpload, bookPost);
router.route("/getall").get(getAllBooks);
router.route("/getone/:id").get(getOneBook);
router.route("/search").get(searchBooks);
router.route("/views/:id").patch(myViews);


export default router;