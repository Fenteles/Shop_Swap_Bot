// Инициализируем Telegram WebApp
Telegram.WebApp.onEvent('mainButtonClicked', function() {
    // Логика при нажатии главной кнопки в Telegram
    alert('Главная кнопка нажата');
});

// Пример кода для кнопок
document.getElementById("like-button").addEventListener("click", function() {
    Telegram.WebApp.sendData("Лайкнутый товар"); // Отправляем данные в бота
});

document.getElementById("dislike-button").addEventListener("click", function() {
    Telegram.WebApp.sendData("Дизлайкнутый товар");
});

document.getElementById("buy-button").addEventListener("click", function() {
    Telegram.WebApp.sendData("Купленный товар");
});
