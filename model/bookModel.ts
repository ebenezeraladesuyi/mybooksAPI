import mongoose from "mongoose";


type books = {
    author: string,
    title: string,
    summary: string,
    ISBN: string,
    authorImage: string,
    coverImage: string,
    views: []
}

interface iBooks extends books, mongoose.Document 
{}

const bookSchema = new mongoose.Schema({
    author: String,
    title: String,
    summary: String,
    ISBN: String,
    authorImage: String,
    coverImage: String,
    views: []
}, {timestamps: true})

export default mongoose.model<iBooks>("myBook", bookSchema)