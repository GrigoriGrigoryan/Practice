import express, { Express, Router, Request, Response } from 'express'
import cors from 'cors';
import compression from 'compression';
import { config as dotenv } from 'dotenv';
import blogRoutes from './routes/blogRoutes';
import readRoutes from './routes/readRoutes';
import writeRoutes from './routes/writeRoutes';
dotenv();


const app: Express = express();
export const PORT: number = 3000 || process.env;

app.use(express.json());
app.use(compression());
app.use(cors());
app.use('/blog', blogRoutes);
app.use('/readfile', readRoutes);
app.use('/writefile', writeRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send(`Homepage`);
})

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);

})