import userRepo from '../reposetories/blog';
import { Request, Response } from 'express';

export default ({
    getUsers(req: Request, res: Response) {
        userRepo.getAll().then((data) => {
            res.status(200).json(data);
        }).catch((err) => {
            res.status(500).json({ error: err.mesage });
        })
    }, createUser(req: Request, res: Response) {
        const user = req.body
        userRepo.create(user).then((data) => {
            res.status(201).json(data);
        }).catch((err) => {
            res.status(500).json({ error: err.mesage });
        })
    }, getUser(req: Request, res: Response) {
        const { _id } = req.params;
        userRepo.getOne(_id).then((data) => {
            res.status(200).json(data);
        }).catch((err) => {
            res.status(500).json({ error: err.mesage });
        })
    }, userUpgrade(req: Request, res: Response) {
        const { _id } = req.params;
        const userPatialData = req.body;
        userRepo.update(_id, userPatialData).then(data => {
            res.status(200).json(data);
        }).catch(err => {
            res.status(500).json({ error: err.message });
        });
    }, userDelete(req: Request, res: Response) {
        const { _id } = req.params;
        userRepo.deleteUser(_id).then((data) => {
            res.status(200).json(data);
        }).catch((err) => {
            res.status(500).json({ error: err.mesage });
        })
    }
})
