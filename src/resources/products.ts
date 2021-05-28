import express from 'express';

const productsController = express.Router();

productsController.get('/', (req, res) => {
    res.send('Products Controller');
});

export default productsController;
