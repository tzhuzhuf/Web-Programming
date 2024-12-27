<?php
$num1 = 10;  
$num2 = 5;   
$operator = "+";  

switch ($operator) {
    case "+":
        $result = $num1 + $num2;
        echo "Результат сложения: $num1 + $num2 = $result";
        break;
    case "-":
        $result = $num1 - $num2;
        echo "Результат вычитания: $num1 - $num2 = $result";
        break;
    case "*":
        $result = $num1 * $num2;
        echo "Результат умножения: $num1 * $num2 = $result";
        break;
    case "/":
        if ($num2 != 0) {
            $result = $num1 / $num2;
            echo "Результат деления: $num1 / $num2 = $result";
        } else {
            echo "Ошибка: деление на ноль!";
        }
        break;
    default:
        echo "Неверный оператор!";
}
?>