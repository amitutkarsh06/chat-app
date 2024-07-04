import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from "./routes/user.routes.js";

import connectToMongoDb from './db/connectToMongoDb.js';

import { app ,server} from './socket/socket.js';
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "inde.html"));
})

/*app.get("/", (req, res) => {
    res.send("<h1>Hii There</h1>");
})*/



server.listen(PORT, () => {
    connectToMongoDb();
    console.log(`server is running on port ${PORT}`);
})