
// Получаем параметры из URL
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('name');
const productDescription = urlParams.get('desc');
const productPrice = urlParams.get('price');

// Обновляем данные на странице
document.getElementById('product-name').textContent = productName || "Неизвестный товар";
document.getElementById('product-description').textContent = productDescription || "Описание отсутствует";
document.getElementById('product-price').textContent = `Цена: ${productPrice || 0} ₽`;
