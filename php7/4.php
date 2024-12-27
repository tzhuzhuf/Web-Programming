<?php
function analyzeText($text) {
    $words = explode(" ", $text);
    $totalWords = count($words);
    $uniqueWords = array_unique($words);
    $wordFrequency = array_count_values($words);

    echo "Общее количество слов: $totalWords<br>";
    echo "Уникальных слов: " . count($uniqueWords) . "<br>";
    echo "Частота: ";
    print_r($wordFrequency);
}

$text = strtolower("hello world hello");
analyzeText($text);
?>
