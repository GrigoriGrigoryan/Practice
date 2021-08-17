"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blog_1 = __importDefault(require("../reposetories/blog"));
exports.default = ({
    getUsers(req, res) {
        blog_1.default.getAll().then((data) => {
            res.status(200).json(data);
        }).catch((err) => {
            res.status(500).json({ error: err.mesage });
        });
    }, createUser(req, res) {
        const user = req.body;
        blog_1.default.create(user).then((data) => {
            res.status(201).json(data);
        }).catch((err) => {
            res.status(500).json({ error: err.mesage });
        });
    }, getUser(req, res) {
        const { _id } = req.params;
        blog_1.default.getOne(_id).then((data) => {
            res.status(200).json(data);
        }).catch((err) => {
            res.status(500).json({ error: err.mesage });
        });
    }, userUpgrade(req, res) {
        const { _id } = req.params;
        const userPatialData = req.body;
        blog_1.default.update(_id, userPatialData).then(data => {
            res.status(200).json(data);
        }).catch(err => {
            res.status(500).json({ error: err.message });
        });
    }, userDelete(req, res) {
        const { _id } = req.params;
        blog_1.default.deleteUser(_id).then((data) => {
            res.status(200).json(data);
        }).catch((err) => {
            res.status(500).json({ error: err.mesage });
        });
    }
});
