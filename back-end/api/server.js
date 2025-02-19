import express from 'express';
import { db } from './connect.js';
import cors from "cors";

const app = express();

app.use(cors());

app.listen(process.env.PORT, () => {
    console.log(`Servidor está escutando`)
});

app.get('/artists', async(req, res) => {
    res.send(await db.collection("artists").find({}).toArray());
});

app.get('/songs', async(req, res) => {
    res.send(await db.collection("songs").find({}).toArray());
});

