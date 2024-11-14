"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.js
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const books_1 = __importDefault(require("./routes/books"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: 'http://localhost:3000' }));
app.use(express_1.default.json());
app.use('/books', books_1.default);
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
