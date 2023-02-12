"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const author_1 = __importDefault(require("../models/author"));
const createAuthor = (req, res, next) => {
    const { name } = req.body;
    const author = new author_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        name,
    });
    return author
        .save()
        .then((author) => res.status(201).json({ author }))
        .catch((error) => res.status(500).json(error.message));
};
const readAuthor = (req, res, next) => {
    const authorId = req.params.authorId;
    return author_1.default.findById(authorId)
        .then((author) => res.status(200).json({ author }))
        .catch((error) => res.status(500).json({ error }));
};
const readAllAuthor = (req, res, next) => {
    return author_1.default.find()
        .then((authors) => res.status(200).json({ authors }))
        .catch((error) => res.status(500).json({ error }));
};
const updateAuthor = (req, res, next) => {
    const authorId = req.params.authorId;
    return author_1.default.findById(authorId)
        .then((author) => {
        if (author) {
            author.set(req.body);
            return author
                .save()
                .then((author) => res.status(201).json({ author }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            res.status(404).json({ message: 'author not found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
const deleteAuthor = (req, res, next) => {
    const authorId = req.params.authorId;
    return author_1.default.findByIdAndDelete(authorId)
        .then((author) => {
        author
            ? res.status(201).json({ message: 'author deleted' })
            : res.status(400);
    })
        .catch((error) => res.status(500).json({ error }));
};
exports.default = {
    createAuthor,
    readAllAuthor,
    readAuthor,
    updateAuthor,
    deleteAuthor,
};
//# sourceMappingURL=authorController.js.map