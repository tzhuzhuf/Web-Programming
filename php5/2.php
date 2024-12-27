<?php
$numbers = [];
for ($i = 0; $i < 15; $i++) {
    $numbers[] = rand(1, 100);
}

$divisibleByFive = [];
foreach ($numbers as $num) {
    if ($num % 5 == 0) {
        $divisibleByFive[] = $num;
    }
}

echo "Исходный массив: " . implode(", ", $numbers) . "<br>";
echo "Числа, делящиеся на 5: " . implode(", ", $divisibleByFive);
?>