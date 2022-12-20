import multer from "multer";
import { Request } from "express";

type destinationCB = (error: Error | null, destination: string) => void

type filenameCB = (error: Error | null, destination: string) => void

const storages = multer.diskStorage({
    destination: (req:Request, file: Express.Multer.File, cb: destinationCB) => {
        cb(null, "uploads")
    },

    filename: (req:Request, file: Express.Multer.File, cb: filenameCB) => {
        cb(null, file.originalname)
    },
})

const coverUpload = multer({
    storage: storages
}).single("coverImage")

export default coverUpload
