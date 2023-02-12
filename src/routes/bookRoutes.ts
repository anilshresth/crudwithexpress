import express from 'express';
import bookControllers from '../controller/bookControllers';

const router = express.Router();

router.post('/create', bookControllers.createBook);
router.get('/get/:bookId', bookControllers.readBook);
router.get('/get', bookControllers.readAllBook);
router.patch('/update/:bookId', bookControllers.updateBook);
router.delete('/delete/:bookId', bookControllers.deleteBook);
export default router;
