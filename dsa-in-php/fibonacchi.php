<?php

// Steps to write a fibonacci number algorithm.
// Prev1 & prev2 var to hold first two fibonacci numbers.
$prev1 = 0;
$prev2 = 1;

// A for loop that runs 18 times
for ($i = 1; $i < 18; $i++) {
    // Add prev1 & prev2
    $newFibonacchi = $prev1 + $prev2;

    // Print the new fibonacci number
    echo $newFibonacchi . "\n";

    // Update prev1 & prev2
    $prev1 = $prev2;
    $prev2 = $newFibonacchi;
}

// Fibonacci series using recursive function
$num1 = 0;
$num2 = 1;
$count = 2;

function fibonacchi($num1, $num2)
{
    global $count;

    $newFibonacchi = $num1 + $num2;
    print_r($newFibonacchi . "\n");

    $num1 = $num2;
    $num2 = $newFibonacchi;
    $count++;

    if ($count <= 18) {
        fibonacchi($num1, $num2);
    }
}

fibonacchi($num1, $num2);

// Function fibonacchi number for nth number using recursive function
function fibonacchiResursion($n)
{
    if ($n <= 1) {
        return 1;
    } else {
        return fibonacchiResursion($n - 1) + fibonacchiResursion($n - 2);
    }
}

fibonacchiResursion(18);
