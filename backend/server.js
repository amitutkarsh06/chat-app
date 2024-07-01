import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from "./routes/user.routes.js";

import connectToMongoDb from './db/connectToMongoDb.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("<h1>Hii There</h1>");
})



app.listen(5000, () => {
    connectToMongoDb();
    console.log(`server is running on port 5000`);
})