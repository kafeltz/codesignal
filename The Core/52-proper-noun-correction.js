// https://app.codesignal.com/arcade/code-arcade/book-market/2nSEQ8CGoddTJtnbo
//
function solution(noun) {
    const output = noun.split('');
    
    output[0] = output[0].toUpperCase();
    
    for (let i = 1; i < output.length; i++) {
        output[i] = output[i].toLowerCase();
    }
    
    return output.join('');
}
