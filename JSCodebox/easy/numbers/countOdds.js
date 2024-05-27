function countOdds(numbers) {
    let i 
    let cont = 0
    for (i in numbers) {
        if (numbers[i] % 2 != 0) {
            cont += 1
        }
    }
    return cont
}
countOdds([1,5,2,6,5,3,9,2])
countOdds([2,6,2,5,2,8])
countOdds([1,1])
countOdds([0])
countOdds([6,3,8,2])