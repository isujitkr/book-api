import express from 'express';
import { 
    getBooksByUser, 
    getBooksIssuedInDateRange, 
    getBookStatus, 
    getTotalRentByBook, 
    issueBook, 
    returnBook
} from '../controllers/transaction.controller.js';


const router = express.Router();

router.post('/issue', issueBook);
router.post('/return', returnBook);
router.get('/bookStatus', getBookStatus);
router.get('/rent', getTotalRentByBook);
router.get('/byUser', getBooksByUser);
router.get('/dateRange', getBooksIssuedInDateRange);

export default router;
