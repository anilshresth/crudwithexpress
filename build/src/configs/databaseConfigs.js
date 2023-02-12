"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const envConfig_1 = __importDefault(require("../../envConfig"));
const Logging_1 = __importDefault(require("../libs/Logging"));
const connectToDatabase = () => {
    const MONGO_URI = envConfig_1.default.MONGO_URI;
    try {
        mongoose_1.default.connect(MONGO_URI);
        Logging_1.default.info('connected to the database');
    }
    catch (error) {
        throw new Error('cannot connect to db');
    }
};
exports.connectToDatabase = connectToDatabase;
//# sourceMappingURL=databaseConfigs.js.map