const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
    res.render('hello', {
        name: 'Sean',
        age: 27
    });

});

router.get('/reverse/:name', (req, res) => {
    const reverse = [...req.params.name].reverse().join('');
    res.send(reverse);
});

module.exports = router;
