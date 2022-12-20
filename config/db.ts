import mongoose from "mongoose";

const URI : string = "mongodb://localhost/ebookstore"

const ebenURI = "mongodb+srv://eben1909:ebenezer-19@cluster0.u3wri8y.mongodb.net/bookstore?retryWrites=true&w=majority"

mongoose.connect(ebenURI)
mongoose.connection.on("open", () => {
        console.log("database now connected")
    }).once("error", (error) => {
        console.log(`error with database`)
    })