import express from "express";
import dotenv from 'dotenv';
import { MongoConnection } from "./config/MongoConnection.js";
import userRoutes from './routes/userRoutes.js';

// ENV 
dotenv.config();

// INITIAL CONFIGURATION APP 
const app = express();
const port =  process.env.PORT || 3000;
app.use(express.json());

// CONFIGURATION
app.disable('x-powered-by');

// ROUTES 
app.use('/api', userRoutes);

// DB CONNECTION
const mongoDb = new MongoConnection(process.env.MONGODB_URI)
mongoDb.connect();

// EXECUTE APP
app.listen(port , ()=>{
    console.log(`Server listing on port ${port}`);
});