<?php
// Проверяем, что запрос был POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    // Если запрос не POST, возвращаем ошибку 404
    header("HTTP/1.1 404 Not Found");
    echo json_encode(["error" => "Метод запроса должен быть POST"]);
    exit();
}

// Получаем входящие данные (JSON)
$inputData = json_decode(file_get_contents('php://input'), true);

// Проверяем, что данные пришли корректно
if (isset($inputData['name'], $inputData['age'], $inputData['gender'], $inputData['color'])) {
    // Подготовим данные для отправки обратно
    $response = [
        'name' => htmlspecialchars($inputData['name']),
        'age' => htmlspecialchars($inputData['age']),
        'gender' => htmlspecialchars($inputData['gender']),
        'color' => htmlspecialchars($inputData['color'])
    ];

    // Отправляем результат в формате JSON
    echo json_encode($response);
} else {
    // Если не все данные были отправлены, возвращаем ошибку
    echo json_encode(["error" => "Не все поля были отправлены"]);
}
?>
