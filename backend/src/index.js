import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bookRoutes from './routes/book.route.js';
import userRoutes from './routes/user.route.js';
import transactionRoutes from './routes/transaction.route.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
connectDB();

app.use('/api/v1/books', bookRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/transactions', transactionRoutes);

app.get('/', (req, res) =>{
    res.send("Api is working");
});

app.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}`);
});