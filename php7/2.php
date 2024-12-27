<?php
$words = ['apple', 'banana', 'cherry', 'kiwi', 'watermelon'];

function compareLength($a, $b) {
    return strlen($a) - strlen($b);
}

usort($words, 'compareLength');

echo "Массив слов, отсортированный по длине: ";
echo implode(", ", $words);
?>
