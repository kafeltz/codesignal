// https://app.codesignal.com/arcade/code-arcade/book-market/2SDWWyHY9Xw5CpphY
//
function solution(inputString) {
    if (inputString.length % 2 !== 0) {
        return false;
    }
    
    const a = inputString.slice(0, inputString.length / 2);
    const b = inputString.slice(inputString.length / 2, inputString.length);
    
    return a === b;
}
