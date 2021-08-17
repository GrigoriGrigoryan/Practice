"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.write = exports.read = void 0;
const uuid_1 = require("uuid");
const fs_1 = __importDefault(require("fs"));
let isRead = false;
let users = [];
const read = () => __awaiter(void 0, void 0, void 0, function* () {
    var e_1, _a;
    if (isRead) {
        return;
    }
    const readStream = fs_1.default.createReadStream('./data/data.text.txt', { encoding: 'utf-8' });
    let data = '';
    try {
        for (var readStream_1 = __asyncValues(readStream), readStream_1_1; readStream_1_1 = yield readStream_1.next(), !readStream_1_1.done;) {
            const chunk = readStream_1_1.value;
            data += chunk;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (readStream_1_1 && !readStream_1_1.done && (_a = readStream_1.return)) yield _a.call(readStream_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    users = JSON.parse(data);
    isRead = true;
    return users;
});
exports.read = read;
const write = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = JSON.stringify(users, null, 2);
    let writer = fs_1.default.createWriteStream('./config/config.user.json');
    writer.write(data);
});
exports.write = write;
exports.default = ({
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield exports.read();
            return users.map(item => (Object.assign({}, item)));
        });
    },
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield exports.read();
            const data = Object.assign(Object.assign({}, user), { _id: uuid_1.v4() });
            users.push(data);
            yield exports.write();
            return Object.assign({}, data);
        });
    },
    getOne(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield exports.read();
            const user = users.find((item) => item._id === _id);
            if (!user)
                return null;
            return Object.assign({}, user);
        });
    },
    deleteUser(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield exports.read();
            const index = users.findIndex((item) => item._id === _id);
            const [user] = users.splice(index, 1);
            yield exports.write();
            return user;
        });
    },
    update(_id, userPatialData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield exports.read();
            const index = users.findIndex((item) => item._id === _id);
            if (index === -1)
                return null;
            const user = Object.assign(Object.assign(Object.assign({}, users[index]), userPatialData), { _id: users[index]._id });
            users[index] = user;
            yield exports.write();
            return Object.assign({}, user);
        });
    }
});
