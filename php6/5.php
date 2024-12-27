<?php
$month = 5; 
$year = 2023;

$daysInMonth = cal_days_in_month(CAL_GREGORIAN, $month, $year);

$firstDay = date('w', mktime(0, 0, 0, $month, 1, $year));

echo "<table border='1' cellpadding='5'>";
echo "<tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr>";

echo "<tr>";

for ($i = 0; $i < $firstDay; $i++) {
    echo "<td></td>";
}

$currentDay = 1;
while ($currentDay <= $daysInMonth) {
    if ($firstDay == 7) {
        echo "</tr><tr>";
        $firstDay = 0;
    }
    
    echo "<td>$currentDay</td>";
    
    $currentDay++;
    $firstDay++;
}

echo "</tr>";
echo "</table>";
?>
