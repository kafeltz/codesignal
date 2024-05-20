// https://app.codesignal.com/arcade/code-arcade/intro-gates/wAGdN6FMPkx7WBq66

// You are given a two-digit integer n. Return the sum of its digits.
//
// Example
//
// For n = 29, the output should be
// solution(n) = 11.

function solution(n) {
    const digits = n.toString().split('');
    
    const sum = digits.reduce((x, y) => parseInt(x, 10) + parseInt(y, 10));
    
    return sum;
}
