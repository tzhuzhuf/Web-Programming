window.onload = function() {
    const canvas = document.getElementById("chessboard");
    const ctx = canvas.getContext("2d");
  
    const boardSize = 9;  // Размер доски 9x9
    const cellSize = canvas.width / boardSize;  // Размер клетки (размер канваса делим на размер доски)
  
    // Рисуем шахматную доску
    for (let row = 0; row < boardSize; row++) {
      for (let col = 0; col < boardSize; col++) {
        // Чередование цветов для клеток: черный и белый
        if ((row + col) % 2 === 0) {
          ctx.fillStyle = "white";  // Белый цвет для четных клеток
        } else {
          ctx.fillStyle = "black";  // Черный цвет для нечетных клеток
        }
  
        // Рисуем клетку
        ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
      }
    }
  
    // Добавляем рамку только по краям доски
    ctx.lineWidth = 10;
    ctx.strokeStyle = "yellow"; // Цвет рамки
    ctx.strokeRect(0, 0, canvas.width, canvas.height); // Рамка вокруг всей доски
  };
  