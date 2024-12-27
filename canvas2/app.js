// Получаем доступ к канвасу и контексту рисования
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Настройки персонажа
const character = {
  x: canvas.width / 2,  // Начальная позиция по оси X
  y: canvas.height / 2, // Начальная позиция по оси Y
  width: 100,            // Ширина персонажа
  height: 100,           // Высота персонажа
  speed: 5,             // Скорость движения персонажа
  image: new Image()    // Загружаем изображение спрайта
};

// Загружаем спрайт для персонажа
character.image.src = "spongebob.png"; 

// Обработчики нажатий клавиш
let keys = {};

// Слушаем события клавиш
window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

// Функция для обновления экрана и передвижения персонажа
function update() {
  // Проверяем нажатие клавиш для передвижения персонажа
  if (keys["ArrowUp"] || keys["w"]) {
    character.y -= character.speed;  // Двигаем персонажа вверх
  }
  if (keys["ArrowDown"] || keys["s"]) {
    character.y += character.speed;  // Двигаем персонажа вниз
  }
  if (keys["ArrowLeft"] || keys["a"]) {
    character.x -= character.speed;  // Двигаем персонажа влево
  }
  if (keys["ArrowRight"] || keys["d"]) {
    character.x += character.speed;  // Двигаем персонажа вправо
  }

  // Ограничиваем персонажа, чтобы он не выходил за пределы канваса
  character.x = Math.max(0, Math.min(character.x, canvas.width - character.width));
  character.y = Math.max(0, Math.min(character.y, canvas.height - character.height));

  // Очистка экрана
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Рисуем персонажа
  ctx.drawImage(character.image, character.x, character.y, character.width, character.height);

  // Повторно вызываем обновление с задержкой
  requestAnimationFrame(update);
}

// Запускаем обновление
character.image.onload = function() {
  update(); // Начинаем анимацию только после того как спрайт загружен
};
