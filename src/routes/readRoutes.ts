import express, { Request, Response, Router } from 'express';
import { read } from "../reposetories/blog";

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    read().then((data) => {
        res.send(data)
    })
})
export default router;