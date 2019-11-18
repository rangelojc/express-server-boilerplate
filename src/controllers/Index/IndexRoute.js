// routes/index.js
import express from 'express';
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send("This is the root URL of the API server");
});
export default router;