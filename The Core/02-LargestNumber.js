// https://app.codesignal.com/arcade/code-arcade/intro-gates/SZB5XypsMokGusDhX
//
// Given an integer n, return the largest number that contains exactly n digits.
//
// Example
//
// For n = 2, the output should be
// solution(n) = 99.

function solution(n) {
    const strNum = '9'.padEnd(n, '9');
    
    return parseInt(strNum, 10);
}
