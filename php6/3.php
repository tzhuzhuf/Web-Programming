<?php
$string = "alcatras";

$charArray = str_split($string);

$charCount = [];

foreach ($charArray as $char) {
    if (isset($charCount[$char])) {
        $charCount[$char]++;
    } else {
        $charCount[$char] = 1;
    }
}

foreach ($charCount as $char => $count) {
    echo "$char => $count<br>";
}
?>
