"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const envConfig_1 = __importDefault(require("../envConfig"));
const databaseConfigs_1 = require("./configs/databaseConfigs");
const Logging_1 = __importDefault(require("./libs/Logging"));
const authorRoutes_1 = __importDefault(require("./routes/authorRoutes/authorRoutes"));
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
const app = (0, express_1.default)();
const PORT = envConfig_1.default.PORT;
const MONGO_URI = envConfig_1.default.MONGO_URI;
(0, databaseConfigs_1.connectToDatabase)();
const main = () => {
    app.use((req, res, next) => {
        Logging_1.default.info(`Incoming request -> Method:[${req.method}] - Url :[${req.url}] -IP:[${req.socket.remoteAddress}] -Status[${req.statusCode}]`);
        req.on('finish', () => {
            Logging_1.default.info(`OutGoing request -> Method:[${req.method}] - Url :[${req.url}] -IP:[${req.socket.remoteAddress}] -Status[${res.statusCode}]`);
        });
        next();
    });
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type.Accept,Authorization');
        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
            return res.status(200).json({});
        }
        next();
    });
    app.get('/', (req, res) => {
        res.status(200).json({ message: 'homepage' });
    });
    app.use('/authors', authorRoutes_1.default);
    app.use('/books', bookRoutes_1.default);
    app.use((req, res, next) => {
        const error = new Error('Page not found');
        return res.status(400).json(error);
    });
    app.listen(PORT, () => Logging_1.default.info(`connected to the port ${envConfig_1.default.PORT}`));
};
main();
//# sourceMappingURL=index.js.map