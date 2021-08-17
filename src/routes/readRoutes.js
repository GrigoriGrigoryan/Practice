"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blog_1 = require("../reposetories/blog");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    blog_1.read().then((data) => {
        res.send(data);
    });
});
exports.default = router;
