import express from 'express';
import logger from '../services/logger';

const productsController = express.Router();

productsController.get('/', logger, (req, res) => {
    res.send('Products Controller');
});

export default productsController;
