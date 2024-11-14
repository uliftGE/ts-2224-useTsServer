"use strict";
// src/routes/books.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("../data");
const router = express_1.default.Router();
// GET /books - 모든 책 목록을 가져옵니다.
router.get('/', (req, res) => {
    res.json(data_1.books);
    console.log('get');
});
// GET /books/:id - 특정 책의 상세 정보를 가져옵니다.
router.get('/:id', (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const book = data_1.books.find((b) => b.id === bookId);
    if (book) {
        res.json(book);
    }
    else {
        res.status(404).json({ message: 'Book not found' });
    }
});
// PUT /books/:id - 특정 책의 한줄평을 업데이트합니다.
router.put('/:id', (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const { review } = req.body;
    const book = data_1.books.find((b) => b.id === bookId);
    if (book) {
        book.review = review || ''; // 한줄평 업데이트
        res.json({ message: 'Review updated successfully', book });
    }
    else {
        res.status(404).json({ message: 'Book not found' });
    }
});
// PUT /books/:id/read - 특정 책의 읽음 상태를 업데이트합니다.
router.put('/:id/read', (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const { read } = req.body; // 읽음 상태를 요청 바디에서 가져옴 (boolean 값)
    const book = data_1.books.find((b) => b.id === bookId);
    if (book) {
        book.read = read; // 읽음 상태 업데이트
        res.json({ message: 'Read status updated successfully', book });
    }
    else {
        res.status(404).json({ message: 'Book not found' });
    }
});
exports.default = router;
