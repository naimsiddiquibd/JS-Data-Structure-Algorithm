const numbers = [1, 4, 6, 9, 12, 16, 24, 27, 32, 38, 42,  48];

function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (array[mid] === target) {
            return mid;
        }
        if (target < array[mid]) {
            end = mid - 1;
        }
        if (target > array[mid]) {
            start = mid + 1;
        }
    }
    return -1;
}

const index = binarySearch(numbers, 32);
console.log(index);