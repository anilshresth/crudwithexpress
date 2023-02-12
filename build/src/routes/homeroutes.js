"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HomeRoutes = () => {
    const router = express_1.default.Router();
    router.get("/api/home", (request, response) => {
        response.send({ name: "anil", age: 34 });
    });
    return router;
};
exports.default = HomeRoutes;
//# sourceMappingURL=homeroutes.js.map