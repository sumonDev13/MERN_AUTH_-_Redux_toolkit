import { config } from 'dotenv';
import express, {  Request, Response , Application } from 'express';
import { dbConnect } from './config/dbConnect';

config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;

dbConnect();

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

