<?php
$users = [
    ['name' => 'Alice', 'age' => 25, 'gender' => 'female'],
    ['name' => 'Bob', 'age' => 30, 'gender' => 'male'],
    ['name' => 'Eve', 'age' => 22, 'gender' => 'female']
];

$totalAge = 0;
foreach ($users as $user) {
    $totalAge += $user['age'];
}
$averageAge = $totalAge / count($users);
echo "Средний возраст всех пользователей: $averageAge<br>";

echo "Список имен всех женщин: ";
foreach ($users as $user) {
    if ($user['gender'] == 'female') {
        echo $user['name'] . " ";
}
}
?>
