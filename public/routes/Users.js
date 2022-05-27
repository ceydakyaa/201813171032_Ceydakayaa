const express = require('express');
const router = express.Router();

const {homePagewithLogin, homePage, homePagewithMessage} = require('../controllers/Users');

router.post('/home', homePagewithLogin);                    // login bilgileri burada db'ye gönderilecek.

router.get('/anasayfa', homePage);              // anasayfa gelecek, tekrardan mesaj gönderme yeri olacak. 
router.post('/anasayfa', homePagewithMessage);              // anasayfa gelecek, tekrardan mesaj gönderme yeri olacak. 

module.exports = router;