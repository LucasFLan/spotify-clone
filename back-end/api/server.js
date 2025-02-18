import express from 'express';
import { db } from './connect.js';
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());

app.listen(port, () => {
    console.log(`Servidor está escutando`)
});

app.get('/artists', async(req, res) => {
    res.send(await db.collection("artists").find({}).toArray());
});

app.get('/songs', async(req, res) => {
    res.send(await db.collection("songs").find({}).toArray());
});