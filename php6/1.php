<?php
$numbers = [];
for ($i = 0; $i < 10; $i++) {
    $numbers[] = rand(1, 100);
}

echo "Исходный массив: " . implode(", ", $numbers) . "<br>";

echo "Массив в обратном порядке: ";
for ($i = count($numbers) - 1; $i >= 0; $i--) {
    echo $numbers[$i] . " ";
}
?>
