import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// אפשר CORS לכל המקורות
app.use(cors());
app.use('/', express.static(path.join(__dirname, '')));

// נתיב לדף הבית
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'status.html'));
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
