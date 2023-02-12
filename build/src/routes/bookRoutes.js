"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookControllers_1 = __importDefault(require("../controller/bookControllers"));
const router = express_1.default.Router();
router.post('/create', bookControllers_1.default.createBook);
router.get('/get/:bookId', bookControllers_1.default.readBook);
router.get('/get', bookControllers_1.default.readAllBook);
router.patch('/update/:bookId', bookControllers_1.default.updateBook);
router.delete('/delete/:bookId', bookControllers_1.default.deleteBook);
exports.default = router;
//# sourceMappingURL=bookRoutes.js.map