import express from "express"
import userRouter from "./route/userRoutes.js"
import { connectDB } from "./connection/Db.js"
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8081
app.use("/api/user",userRouter)



connectDB()

app.listen(port,()=>console.log(`Server is Running ${port}`));