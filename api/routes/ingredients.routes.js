let express = require('express'),
    router = express.Router();

router.route('/ingredients/:cake').get((req, res) => {
    return res.json(['sugar']);
});

module.exports = router;