<?php
$numbers = [3, 12, 5, 20, 7, 15, 8, 13, 10, 2];

echo "Четные числа: ";
foreach ($numbers as $number) {
    if ($number % 2 == 0) {
        echo $number . " ";
}
}

echo "<br>";

$sum = 0;
foreach ($numbers as $number) {
    if ($number > 10) {
        $sum += $number;
    }
}
echo "Сумма чисел больше 10: $sum<br>";

$count = 0;
foreach ($numbers as $number) {
    if ($number < 5) {
        $count++;
    }
}
echo "Количество чисел меньше 5: $count<br>";
?>
