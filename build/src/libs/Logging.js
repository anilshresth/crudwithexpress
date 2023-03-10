"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class Logging {
}
exports.default = Logging;
Logging.info = (args) => console.log(chalk_1.default.blue(`[${new Date().toLocaleDateString()}][INFO]`), typeof args === 'string' ? chalk_1.default.blackBright(args) : args);
Logging.warn = (args) => console.log(chalk_1.default.yellow(`[${new Date().toLocaleDateString()}][INFO]`), typeof args === 'string' ? chalk_1.default.yellowBright(args) : args);
Logging.error = (args) => console.log(chalk_1.default.red(`[${new Date().toLocaleDateString()}][INFO]`), typeof args === 'string' ? chalk_1.default.redBright(args) : args);
//# sourceMappingURL=Logging.js.map