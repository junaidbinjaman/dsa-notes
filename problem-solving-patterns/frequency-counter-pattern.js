// Problem Description: Write a function which will accept two arrays and check, if the second array has the squard of the first array


function same(arr1, arr2) {
    // Check whether the arr1 and arr2 has the same width. Return false, if different width.
    if (arr1.length !== arr2.length) {
        return false;
    }
    
     // Loop over the first array, Take an array element, squard the element and check it's index ID in the second array.
    for (let value of arr1) {
        let currentIndex = arr2.indexOf(value ** 2);

        // If the index ID is equal to -1 return false.
        if (currentIndex === -1) {
            return false;
        }

        // Splice squard value from the second array.
        arr2.splice(currentIndex, 1);
    }

    // Return true outside the array.
    return true;
}

const arr1 = [1, 2, 3];
const arr2 = [1, 4, 9];

same(arr1, arr2);