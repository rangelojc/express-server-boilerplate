import express from 'express';
var router = express.Router();

import UsersController from './UsersController';

router.get('/', async function (req, res, next) {
    const data = await new UsersController().get();
    res.json(data);
});

router.get('/:userid', async function (req, res, next) {
    const data = await new UsersController().get(req.params);
    res.json(data);
});

export default router;
