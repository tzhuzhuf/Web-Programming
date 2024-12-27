<?php
$string = "Hello, world!";
$vowels = ['a', 'e', 'i', 'o', 'u'];
$lowercasedString = strtolower($string); 
$vowelCount = 0;

foreach (str_split($lowercasedString) as $char) {
    if (in_array($char, $vowels)) {
        $vowelCount++;
    }
}

echo "Количество гласных в строке '{$string}': $vowelCount";
?>