import express from 'express';
import { promises as fs } from 'fs';
import csv from 'csvtojson';
import { stringify } from 'querystring';

export const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/write', async (req, res) => {
    const myFile = await fs.open('data/myFile.txt', 'a+');
    await myFile.write('Hello World\n');
    res.send('File content is written');
});

app.get('/read', async (req, res) => {
    const myFile = await fs.readFile('data/myFile.txt', 'utf-8');
    res.send(myFile);
});

app.get('/read-csv', async (req, res) => {
    const jsonObj = await csv().fromFile('data/users.csv');
    jsonObj.forEach((record) => {
        if (!record.phone) record.phone = 'missing data';
    });

    res.send(jsonObj);
});

app.get('/write-csv', (req, res) => {
    res.send('Converting in process');
    csv()
        .fromFile('data/users.csv')
        .then((data) => {
            let newData = data.map(
                (item: {
                    first_name: string;
                    last_name: string;
                    phone: string;
                }) => {
                    let first_name = item.first_name;
                    let last_name = item.last_name;
                    let phone = item.phone;
                    if (phone == '') phone = 'missing_data';
                    return { first_name, last_name, phone };
                }
            );
            fs.writeFile('data/users.json', JSON.stringify(newData));
        });
});

app.get('/read-abit', async (req, res) => {
    const buff = Buffer.alloc(30);
    const myFile = await fs.open('data/myFile.txt', 'r');
    await myFile.read(buff, 0, 5);

    const decode: string[] = [];
    buff.forEach((code) => {
        decode.push(String.fromCharCode(code));
    });

    res.send(decode.join(''));
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
