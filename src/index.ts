import e from 'express';
import express, { Request, Response, NextFunction } from 'express';
import mongoose, { mongo } from 'mongoose';
import envValues from '../envConfig';
import { connectToDatabase } from './configs/databaseConfigs';
import Logging from './libs/Logging';
import authorRoutes from './routes/authorRoutes/authorRoutes';
import bookRoutes from './routes/bookRoutes';

const app = express();
const PORT = envValues.PORT;
const MONGO_URI = envValues.MONGO_URI;

connectToDatabase();
const main = () => {
    app.use((req, res, next) => {
        Logging.info(
            `Incoming request -> Method:[${req.method}] - Url :[${req.url}] -IP:[${req.socket.remoteAddress}] -Status[${req.statusCode}]`
        );
        req.on('finish', () => {
            Logging.info(
                `OutGoing request -> Method:[${req.method}] - Url :[${req.url}] -IP:[${req.socket.remoteAddress}] -Status[${res.statusCode}]`
            );
        });
        next();
    });
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin,X-Requested-With,Content-Type.Accept,Authorization'
        );
        if (req.method == 'OPTIONS') {
            res.header(
                'Access-Control-Allow-Methods',
                'PUT,POST,PATCH,DELETE,GET'
            );
            return res.status(200).json({});
        }
        next();
    });
    app.get('/', (req, res) => {
        res.status(200).json({ message: 'homepage' });
    });
    app.use('/authors', authorRoutes);
    app.use('/books', bookRoutes);
    app.use((req, res, next) => {
        const error = new Error('Page not found');
        return res.status(400).json(error);
    });
    app.listen(PORT, () =>
        Logging.info(`connected to the port ${envValues.PORT}`)
    );
};
main();
