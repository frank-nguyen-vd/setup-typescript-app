import express from 'express';

const usersController = express.Router();

usersController.get('/', (req, res) => {
    res.send('Users Controller');
});

export default usersController;
