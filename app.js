const express = require('express');
const app = express();
const loaders = require('./public/loaders');

const UserRoutes = require('./public/routes/Users');

app.set('view-engine', 'ejs');
app.use(express.urlencoded({extended: false}));


loaders();

app.get('/', (req, res) => {
    // res.send('Hello World!!!');
    res.render('index.ejs');
});

app.use(express.static("public"));

app.use('/', UserRoutes);


const port = 5500;

app.listen(port, () => {
    console.log(`Express server is running at ${port}`);
});
