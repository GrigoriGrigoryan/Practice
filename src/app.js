"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const dotenv_1 = require("dotenv");
const blogRoutes_1 = __importDefault(require("./routes/blogRoutes"));
const readRoutes_1 = __importDefault(require("./routes/readRoutes"));
const writeRoutes_1 = __importDefault(require("./routes/writeRoutes"));
dotenv_1.config();
const app = express_1.default();
exports.PORT = 3000 || process.env;
app.use(express_1.default.json());
app.use(compression_1.default());
app.use(cors_1.default());
app.use('/blog', blogRoutes_1.default);
app.use('/readfile', readRoutes_1.default);
app.use('/writefile', writeRoutes_1.default);
app.get('/', (req, res) => {
    res.send(`Homepage`);
});
app.listen(exports.PORT, () => {
    console.log(`Server running on port: http://localhost:${exports.PORT}`);
});
