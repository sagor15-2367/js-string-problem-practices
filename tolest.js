function maxInArray(number) {
    let largest = number[0];
    for (let i = 0; i < number.length; i++) {
        const indes = i;
        const element = number[indes];
        // console.log(element);
        if (element > largest) {
            largest = element;
        }

    }
    return largest;
}
const height = [144, 145, 156, 143, 167, 112];
const tallest = maxInArray(height);
console.log('tallest person is :', tallest);