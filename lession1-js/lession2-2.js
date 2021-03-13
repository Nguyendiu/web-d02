function sumZero(arr) {
    let start_point = 0
    let end_point = arr.length

    while (start_point < end_point) {
        if (arr[start_point] < 0) {
            for (let find_point = start_point + 1; find_point < end_point; find_point++) {
                if (arr[start_point] + arr[find_point] === 0) {
                    console.log([arr[start_point], arr[find_point]])

                }

            }
        }
        start_point += 1;
    }
    return undefined
}
// var arr = [-3, -2, -1, 0, 1, 2, 3]
sumZero([-3, -2, -1, 0, 1, 2])
