<?php
$words = ["word1", "word2", "phrase", "bublik", "box"];

echo "Слова в массиве:<br>";
foreach ($words as $word) {
    echo "Слово: $word<br>";
}

$longestWord = "";
foreach ($words as $word) {
    if (strlen($word) > strlen($longestWord)) {
        $longestWord = $word;
    }
}
echo "Самая длинная строка: $longestWord<br>";

$totalLength = 0;
foreach ($words as $word) {
    $totalLength += strlen($word);
}
echo "Общее количество символов: $totalLength<br>";
?>
