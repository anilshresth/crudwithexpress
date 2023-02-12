import mongoose, { Document, mongo, Schema } from 'mongoose';

export interface IBook extends Document {
    title: string;
    author: string;
}

const BookSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        author: { type: Schema.Types.ObjectId, required: true, ref: 'Author' },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<IBook>('Book', BookSchema);
