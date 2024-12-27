<?php
$ages = [12, 25, 17, 8, 34, 19, 45, 23, 15, 10];

$children = [];
$adults = [];
$seniors = [];

foreach ($ages as $age) {
    if ($age < 18) {
        $children[] = $age;
    } elseif ($age >= 18 && $age <= 35) {
        $adults[] = $age;
    } else {
        $seniors[] = $age;
    }
}

echo "Дети: " . implode(", ", $children) . "<br>";
echo "Взрослые: " . implode(", ", $adults) . "<br>";
echo "Пожилые: " . implode(", ", $seniors) . "<br>";
?>
