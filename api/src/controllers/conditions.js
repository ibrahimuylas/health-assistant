const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        let result = await require('../repositories/conditions.json');
        res.status(200).json(result);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Unexpected error has been occured!',
            error
        });
    }
});

module.exports = router;