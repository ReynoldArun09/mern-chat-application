import express from 'express'
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import MongoConnection from "./database/MongoConnection.js";
import { app, server } from "./socket/socket.js";

import AuthRoute from './routes/auth.routes.js'
import UserRoute from './routes/user.routes.js'
import MessageRoute from './routes/message.routes.js'

dotenv.config()

const port = process.env.PORT || 3001;

// middlewares
app.use(cors({
  origin: process.env.ORIGIN,
  credentials: true
}))
app.use(express.json())
app.use(helmet())
app.use(cookieParser())
app.use(morgan('dev'))


app.use('/api/v1/auth', AuthRoute)
app.use('/api/v1/user', UserRoute)
app.use('/api/v1/message', MessageRoute)
  
server.listen(port, () => {
  MongoConnection()
  console.log(`[Server]: up and running on ${port}`);
});
