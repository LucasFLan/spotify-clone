import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const URI = `mongodb+srv://lucaslan10:${process.env.DB_PASSWORD}@cluster0.pmkio.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(URI);

export const db = client.db(process.env.DB_NAME);

