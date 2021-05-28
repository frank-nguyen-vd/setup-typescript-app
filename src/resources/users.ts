import express from 'express';
import logger from '../services/logger';

const usersController = express.Router();

usersController.get('/', logger, (req, res) => {
    res.send('Users Controller');
});

export default usersController;
