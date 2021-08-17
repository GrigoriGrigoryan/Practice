import { write } from "../reposetories/blog";
import { PORT } from '../app'
import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    write().then(() => {
        res.json(`Write succsefully done! Go to http://localhost:${PORT}/blog`);
    })
})

export default router;