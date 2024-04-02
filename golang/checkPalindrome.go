func solution(inputString string) bool {
    // var i int;
    
    var runes = []rune(inputString);
    
    for i, j := 0, len(runes) - 1; i < len(runes) / 2; i, j = i+1, j-1 {
        if runes[i] != runes[j] {
            return false;
        }
    }
    
    
    return true;
}
