import express from 'express';
import controller from '../../controller/authorController';
import {
    createSchema,
    validateSchema,
    updateSchema,
} from '../../middleware/validateSchema';

const router = express.Router();
router.post('/create', validateSchema(createSchema), controller.createAuthor);
router.get(
    '/get/:authorId',
    validateSchema(updateSchema),
    controller.readAuthor
);
router.get('/get', controller.readAllAuthor);
router.patch('/update/:authorId', controller.updateAuthor);
router.delete('/delete/:authorId', controller.deleteAuthor);
export default router;
