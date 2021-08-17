import { v4 as uuid } from 'uuid';
import fs from 'fs';

let isRead = false;
let users: any[] = [];
export const read = async () => {
    if (isRead) {
        return;
    }
    const readStream = fs.createReadStream('./data/data.text.txt', { encoding: 'utf-8' });
    let data: string = ''
    for await (const chunk of readStream) {
        data += chunk
    }
    users = JSON.parse(data)
    isRead = true
    return users;
}

export const write = async () => {

    const data = JSON.stringify(users, null, 2);
    let writer = fs.createWriteStream('./config/config.user.json');
    writer.write(data)
}

export default ({
    async getAll() {
        await read();
        return users.map(item => ({ ...item }));
    },
    async create(user: any) {
        await read();
        const data = { ...user, _id: uuid() };
        users.push(data);
        await write();
        return { ...data };
    },

    async getOne(_id: string) {
        await read();
        const user = users.find((item) => item._id === _id);
        if (!user) return null;
        return { ...user };
    },

    async deleteUser(_id: string) {
        await read();
        const index = users.findIndex((item) => item._id === _id);
        const [user] = users.splice(index, 1);
        await write();
        return user;
    },

    async update(_id: string, userPatialData: object) {
        await read();
        const index = users.findIndex((item) => item._id === _id);
        if (index === -1) return null;
        const user = { ...users[index], ...userPatialData, _id: users[index]._id };
        users[index] = user;
        await write();
        return { ...user };
    }
})

