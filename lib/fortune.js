const fortunes = [
    'Победи свои страхи, или они победят тебя',
    'Рекам нужны истоки',
    'Небойся невидимого',
    'Тебя ждет приятныцй сюрприз',
    'Будь проще везед, где только можно',
]

exports.getFortune = function () {
    const idx = Math.floor(Math.random() * fortunes.length)
    return fortunes[idx]
}