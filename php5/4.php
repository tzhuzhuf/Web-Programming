<?php 
function isPalindrome($string) {
    $cleanedString = strtolower(preg_replace("/[^a-zA-Z0-9]/", "", $string)); // Убираем все небуквенно-цифровые символы
    $reversedString = strrev($cleanedString);
    
    return $cleanedString === $reversedString;
}

$string = "level"; // Тестовая строка
if (isPalindrome($string)) {
    echo "'{$string}' — палиндром!";
} else {
    echo "'{$string}' — не палиндром.";
}
?>