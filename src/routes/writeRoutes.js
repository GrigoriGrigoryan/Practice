"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blog_1 = require("../reposetories/blog");
const app_1 = require("../app");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    blog_1.write().then(() => {
        res.json(`Write succsefully done! Go to http://localhost:${app_1.PORT}/blog`);
    });
});
exports.default = router;
