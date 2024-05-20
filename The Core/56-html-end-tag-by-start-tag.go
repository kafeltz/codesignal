// https://app.codesignal.com/arcade/code-arcade/book-market/MX94DWTrwQw2gLrTi

func solution(startTag string) string {
    var firstSpaceIndex = strings.Index(startTag, " ")
    
    var tag string;
    
    if firstSpaceIndex != -1 {
        tag = "</" + startTag[1 : firstSpaceIndex] + ">"
    } else {
        tag = "</" + startTag[1 : len(startTag) - 1] + ">"        
    }
    
    return tag
}
