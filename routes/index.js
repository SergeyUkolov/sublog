var express = require('express');
var router = express.Router();

/* GET home page. */
//  router.get('/', function(req, res) {
//    res.render('index', { title: 'Express' });
// });
// router.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });
router.get('/', function(req, res) {
    res.render('pages/index');
});
module.exports = router;
