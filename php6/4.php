<?php
$number = 54321;

$numberString = strval($number);

$digits = str_split($numberString);

$sum = 0;
foreach ($digits as $digit) {
    $sum += (int)$digit;
}

echo "Сумма цифр числа $number: $sum";
?>
