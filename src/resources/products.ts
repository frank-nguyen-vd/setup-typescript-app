import express from 'express';
import logger from '../services/logger';

const productsController = express.Router();

productsController.get('/', logger, (req, res) => {
    return res.send({
        success: true
    });
});

export default productsController;
