import express from 'express';
import cors from 'cors';
import {Name} from './models/Name.js';

const app = express();
const PORT = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

app.get('/test-api', (req, res) => {
  res.send('API works');
})

app.post('/add', async(req, res) => {
  const { name } = req.body;

  await Name.create({ name });

  res.send('OK');
})

app.get('/get-name/:name', async(req, res) => {
  const { name } = req.query

  const foundName = await Name.findOne({
    where: {
      name
    }
  })

  res.send(foundName);
})

app.listen(PORT);
