const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use('/contact', function (request, response) {
    response.render('contact', {
        title: 'Мои контакты',
        emailsVisible: true,
        emails: ['cici@ivim.com', 'caca@ivim.com'],
        phone: '+1234567890',
    });
});
app.use('/', function (request, response) {
    response.send('Главная страница');
});
app.listen(3000);
