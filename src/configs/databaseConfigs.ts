import mongoose, { Connection } from 'mongoose';
import envValues from '../../envConfig';
import Logging from '../libs/Logging';
const connectToDatabase = () => {
    const MONGO_URI = envValues.MONGO_URI;
    try {
        mongoose.connect(MONGO_URI);
        Logging.info('connected to the database');
    } catch (error) {
        throw new Error('cannot connect to db');
    }
};

export { connectToDatabase };
