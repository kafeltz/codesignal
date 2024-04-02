func solution(year int) int {
    // 1-100 = 1
    // 101-200 = 2
    if (year % 100 > 0) {
        return (year / 100) + 1;
    } else {
        return (year / 100);
    }            
}
