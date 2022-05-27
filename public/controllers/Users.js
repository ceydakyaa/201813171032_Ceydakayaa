const {login, sendMessage} = require('../services/Users');


const homePagewithLogin = (req, res) => {                   // login bilgileri burada db'ye gönderilecek.
    login(req.body)
    .then((response) => {
        res.redirect('/anasayfa');
    }).catch((e) => {
        res.send(e);
    });
}

const homePage = (req, res) => {
    res.render('message.ejs');
}

const homePagewithMessage = (req, res) => {             // mesaj bilgileri burada db'ye gönderilecek.
    sendMessage(req.body)
        .then((response) => {
            res.redirect('/anasayfa');
        }).catch((e) => {
            res.send(e);
        });
}

module.exports = {
    homePagewithLogin,
    homePage,
    homePagewithMessage,
}