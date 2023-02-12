import { z, AnyZodObject, ZodError } from 'zod';
import { IAuthor } from '../models/author';
import { Request, Response, NextFunction } from 'express';
import { IBook } from '../models/Book';
import { message } from '@pankod/refine-antd';
import mongoose, { Schema } from 'mongoose';

export const validateSchema = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync({
                body: req.body,
                params: req.params.authorId,
            });

            return next();
        } catch (error) {
            if (error instanceof ZodError) {
                res.status(400).json(error.flatten());
            } else {
                res.status(500).json(error);
            }
        }
    };
};
export const createSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: 'the name of the author is required',
        }),
    }),
});

export const updateSchema = z.object({
    body: z.object({
        name: z.string(),
    }),
    params: z.instanceof(mongoose.Types.ObjectId),
});
