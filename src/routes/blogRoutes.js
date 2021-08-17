"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blog_1 = __importDefault(require("../controllers/blog"));
const router = express_1.default.Router();
router.get('/', blog_1.default.getUsers);
router.post('/', blog_1.default.createUser);
router.get('/:_id', blog_1.default.getUser);
router.patch('/:_id', blog_1.default.userUpgrade);
router.delete('/:_id', blog_1.default.userDelete);
exports.default = router;
