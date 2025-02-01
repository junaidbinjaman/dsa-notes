/**
 * Recursion is a programming concept where a function calls itself to solve a problem
 * by breaking it down into smaller, similar sub-problems.
 * 
 * Key components of recursion:
 * 1. Base case: Condition to stop recursion
 * 2. Recursive case: The function calling itself
 * 
 * Example: Factorial calculation
 * - Factorial of n (n!) is the product of all positive integers <= n
 * - Example: 5! = 5 * 4 * 3 * 2 * 1 = 120
 * - Base case: if n <= 1, return 1
 * - Recursive case: n * factorial(n-1)
 */

// I've represented recursion here through a factorial function

function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1)
}

console.log(factorial(4));