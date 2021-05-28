import express from 'express';

export const app = express();
const port = 5000;

app.get('/api', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
