func solution(inputArray []int) int {
    var t int;
    max := -1000;
    
    for i := range(inputArray) {
        if i == len(inputArray) - 1 {
            break;
        }
        
        t = inputArray[i] * inputArray[i+1];
        
        if t > max {
            max = t;
        }
    }
    
    return max;
}
