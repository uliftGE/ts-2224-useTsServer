// src/app.js
import express from 'express';
import cors from 'cors';
import bookRoutes from './routes/books';

const app = express();

app.use(cors({ origin: 'http://localhost:3001' }));
app.use(express.json());
app.use('/books', bookRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
