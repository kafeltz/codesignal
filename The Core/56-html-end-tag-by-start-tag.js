// https://app.codesignal.com/arcade/code-arcade/book-market/MX94DWTrwQw2gLrTi

function solution(startTag) {
    // without fancy powerful regex

    const firstSpace = startTag.indexOf(' ');

    let tag;
    if (firstSpace !== -1) {
        tag = startTag.slice(1, firstSpace);
    } else {
        tag = startTag.slice(1, startTag.length - 1);            
    }
    
    return `</${tag}>`;
}
