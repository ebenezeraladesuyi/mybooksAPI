import express, { Application } from "express";
const port: number | string = process.env.port || 7000;
const app: Application = express();
app.use(express.json());
import cors from "cors";
require("../config/db")
import router from "../router/bookstoreRouter"

app.use(cors())

app.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).json({
        message: "server running"
    })
})

app.use("/api", router)

app.listen(port, () => {
    console.log(`server up on: ${port}`)
})