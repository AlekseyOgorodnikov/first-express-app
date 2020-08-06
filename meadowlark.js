const express = require('express')
const app = express();

//установка механизма представления handlebars
const handlebars = require('express-handlebars').create({ defaultLayout: 'main' })
app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')

app.set('port', process.env.PORT || 3000)
app.use(express.static(__dirname + '/public'))
//добавляем маршруты
app.get('/', function (req, res) {
    res.render('home')
})
app.get('/about', function (req, res) {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    res.render('about', { fortune: randomFortune })
})
app.use(function (req, res, next) {
    res.status(404)
    res.render('404')
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500)
    res.render('500')
})
app.listen(app.get('port'), function () {
    console.log('Express запущен на http://localhost:' + app.get('port') + '; нажмите Ctrl+C для завершения.')
})

const fortunes = [
    'Победи свои страхи, или они победят тебя',
    'Рекам нужны истоки',
    'Небойся невидимого',
    'Тебя ждет приятныцй сюрприз',
    'Будь проще везед, где только можно',
]