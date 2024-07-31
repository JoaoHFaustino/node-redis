import express, { json } from 'express';
import productsRoutes from './routes/productsRoutes';

const app = express();
const port = 3000;

app.use(json());
app.use(productsRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});