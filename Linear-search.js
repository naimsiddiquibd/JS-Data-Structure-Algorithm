const numbers = [34, 4, 34, 23, 76, 56, 45, 27, 5, 45, 87,  64];

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element === target) {
            return i;
        }
    }
    return -1;
}

const index = linearSearch(numbers, 87);
console.log(index);