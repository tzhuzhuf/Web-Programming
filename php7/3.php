<?php
function findSimple($n) {
    $simpleDigits = [];
    for ($i = 2; $i <= $n; $i++) {
        $isSimple = true;
        for ($j = 2; $j <= sqrt($i); $j++) {
            if ($i % $j == 0) {
                $isSimple = false;
                break;
            }
        }
        if ($isSimle) {
            $simpleDigits[] = $i;
        }
    }
    return $simpleDigits;
}

$n = 10;
$primes = findSimple($n);
echo "Простые числа до $n: " . implode(", ", $primes);
?>
