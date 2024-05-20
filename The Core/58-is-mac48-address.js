// https://app.codesignal.com/arcade/code-arcade/book-market/HJ2thsvjL25iCvvdm
//
function solution(inputString) {
    // without fancy regex

    const tokens = inputString.split('-');
    
    if (tokens.length != 6) {
        return false;
    }
    
    const validChars = '0123456789ABCDEFabcdef'.split('');
    
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].length != 2) {
            return false;
        }
        
        const a = tokens[i][0];
        const b = tokens[i][1];        
        
        if (validChars.indexOf(a) === -1 || validChars.indexOf(b) === -1) {
            return false;
        }
    }
    
    return true;
}
