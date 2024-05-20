// https://app.codesignal.com/arcade/code-arcade/book-market/G9wj2j6zaWwFWsise

function solution(inputString) {
    const s = inputString.toLowerCase();
    
    for (let i = 0, j = s.length - 1; i < s.length; i++, j--) {
        if (s[i] !== s[j]) {
            return false;
        }
    }
    
    return true;
}

