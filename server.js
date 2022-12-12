import express from "express"
import {json} from "express"
import cors from "cors"
import nodemailer from "nodemailer";
import {rootRouter} from "./rootRouter.js";


const PORT = process.env.PORT || "5000";
const server = express()


export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "kvitnychok.ua@gmail.com",
        pass: "nljmpgfvqniafxsf"
    },
})

// server middlewares
server.use(cors())
server.use(json())
server.use(rootRouter)
// server
server.listen(PORT, async () => {
    console.log(`Nodemailer server has been started http://localhost:${PORT}`)
})

