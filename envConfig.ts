import * as dotenv from 'dotenv';
dotenv.config();

const envValues = Object.freeze({
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/authors',
    PORT: process.env.PORT ? Number(process.env.PORT) : 8000,
});

export default envValues;
