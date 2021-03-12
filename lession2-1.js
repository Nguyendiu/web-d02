const sortNumber = numArray => numArray.sort((a, b) => a - b);

const same = (_arr1, _arr2) => {
    const arr2 = sortNumber(_arr2);
    return sortNumber(_arr1).every((res, i) => arr2[i] === res ** 2);
}

console.log(same([1, 2, 3], [9, 1, 4]))