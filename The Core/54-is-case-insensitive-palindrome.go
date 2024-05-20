// https://app.codesignal.com/arcade/code-arcade/book-market/G9wj2j6zaWwFWsise

func solution(inputString string) bool {
    output := strings.ToLower(inputString);
    
    for i, j := 0, len(output) - 1; i < len(output); i, j = i+1, j-1 {
        if output[i] != output[j] {
            return false;
        }
    }
    
    return true;
}
