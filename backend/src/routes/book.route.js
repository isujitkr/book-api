import express from 'express';
import { 
    getAllBooks, 
    getBooksByCategoryNameRent, 
    getBooksByName, 
    getBooksByRentRange 
} from '../controllers/book.controller.js';

const router = express.Router();

router.get('/all-books', getAllBooks)
router.get('/name', getBooksByName);
router.get('/rent', getBooksByRentRange);
router.get('/search', getBooksByCategoryNameRent);

export default router;
