import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Book from '../models/Book';

const createBook = (req: Request, res: Response, next: NextFunction) => {
    const { title, author } = req.body;
    const book = new Book({
        _id: new mongoose.Types.ObjectId(),
        title,
        author,
    });
    return book
        .save()
        .then((book) => res.status(201).json({ book }))
        .catch((error) => res.status(500).json(error.message));
};
const readBook = (req: Request, res: Response, next: NextFunction) => {
    const bookId = req.params.bookId;
    return Book.findById(bookId)
        .populate('author')
        .select('-__v')
        .then((book) => res.status(200).json({ book }))
        .catch((error) => res.status(500).json({ error }));
};
const readAllBook = (req: Request, res: Response, next: NextFunction) => {
    return Book.find()
        .populate('author')
        .select('-__v')
        .then((books) => res.status(200).json({ books }))
        .catch((error) => res.status(500).json({ error }));
};
const updateBook = (req: Request, res: Response, next: NextFunction) => {
    const bookId = req.params.bookId;
    return Book.findById(bookId)
        .then((author) => {
            if (author) {
                author.set(req.body);
                return author
                    .save()
                    .then((book) => res.status(201).json({ book }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                res.status(404).json({ message: 'author not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};
const deleteBook = (req: Request, res: Response, next: NextFunction) => {
    const bookId = req.params.bookId;
    return Book.findByIdAndDelete(bookId)
        .then((book) => {
            book
                ? res.status(201).json({ message: 'author deleted' })
                : res.status(400);
        })
        .catch((error) => res.status(500).json({ error }));
};

export default {
    createBook,
    readBook,
    readAllBook,
    updateBook,
    deleteBook,
};
