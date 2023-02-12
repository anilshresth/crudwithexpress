"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authorController_1 = __importDefault(require("../../controller/authorController"));
const validateSchema_1 = require("../../middleware/validateSchema");
const router = express_1.default.Router();
router.post('/create', (0, validateSchema_1.validateSchema)(validateSchema_1.createSchema), authorController_1.default.createAuthor);
router.get('/get/:authorId', (0, validateSchema_1.validateSchema)(validateSchema_1.updateSchema), authorController_1.default.readAuthor);
router.get('/get', authorController_1.default.readAllAuthor);
router.patch('/update/:authorId', authorController_1.default.updateAuthor);
router.delete('/delete/:authorId', authorController_1.default.deleteAuthor);
exports.default = router;
//# sourceMappingURL=authorRoutes.js.map