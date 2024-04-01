import (
    "slices"
)

func solution(statues []int) int {
    var total int;
    
    slices.SortFunc(statues, func(i, j int) int {
        return i - j
    })
        
    // fmt.Println(statues)
    
    for i := 0; i < len(statues) - 1; i++ {
        total = total + statues[i+1] - statues[i] -1
    }
    
    return total
}
