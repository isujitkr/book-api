import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/user.model.js';
import Book from '../models/book.model.js';
import connectDB from '../config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // Sample Users
    const users = [
      { name: 'Sujit Kumar', email: 'sujit@example.com', password: 'password123' },
      { name: 'Aman Kumar', email: 'aman@example.com', password: 'password123' },
      { name: 'Anuj Kumar', email: 'anuje@example.com', password: 'password123' },
      { name: 'Rahul Kumar', email: 'rahul@example.com', password: 'password123' },
      { name: 'Kunal Kumar', email: 'kunal@example.com', password: 'password123' },
    ];

    // Sample Books
    const books = [
      { name: 'Harry Potter', category: 'Fantasy', rentPerDay: 500 },
      { name: 'Lord of the Rings', category: 'Fantasy', rentPerDay: 600 },
      { name: 'JavaScript for Beginners', category: 'Programming', rentPerDay: 300 },
      { name: 'Node.js in Action', category: 'Programming', rentPerDay: 400 },
      { name: 'Data Science with Python', category: 'Data Science', rentPerDay: 700 },
      { name: 'The book Thief', category: 'Fantasy', rentPerDay: 200 },
      { name: 'Atomic Habits', category: 'Self Help', rentPerDay: 800 },
      { name: 'Becoming Enlighten', category: 'Self help', rentPerDay: 200 },
      { name: 'Think and Grow Rich', category: 'Self Help', rentPerDay: 300 },
      { name: 'Silver on the Tree', category: 'Adventure', rentPerDay: 400 },
      { name: 'The Revenge of Seven', category: 'Adeventure', rentPerDay: 700 },
      { name: 'Behind the Mask', category: 'Health and Fitness', rentPerDay: 300 },
      { name: 'The 48 Laws of Power', category: 'Philosophy', rentPerDay: 800 },
      { name: 'The God Delusion', category: 'Philosophy', rentPerDay: 300 },
      { name: 'Dragon Ball Z', category: 'Fantasy', rentPerDay: 400 },
      { name: 'Superman', category: 'Comics', rentPerDay: 400 },
      { name: 'The Century Trilogy', category: 'Historical', rentPerDay: 700 },
      { name: 'The Tilly troter', category: 'Historical', rentPerDay: 200 },
      { name: 'Kingsbridge', category: 'Historical', rentPerDay: 900 },
      { name: 'The Inheritance Cycle', category: 'Thriller', rentPerDay: 600 },
    ];

    await User.insertMany(users);
    await Book.insertMany(books);

    console.log('Sample data imported!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

importData();
