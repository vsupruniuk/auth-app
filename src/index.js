import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

app.get('/test-api', (req, res) => {
  res.send('API works');
})

app.listen(PORT);
