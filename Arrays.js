function swap(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

function reorderEvenOdd(a) {
    let even = 0, odd = a.length - 1;

    while (even < odd) {
        if (a[even] % 2 === 0) {
            even++;
        } else {
            swap(a, even, odd);
            odd--;
        }
    }

    console.log(a);
}

let array = [9,7,6,5,1,0,3,4,8,4];
//reorderEvenOdd(array);


// 6.1 Write a program that takes an array a and an index, pivot, into a, 
// and rearranges the elements such that all elements less than a[pivot] appear first,
// followed by elements equal to the pivot, followed by elements greater than the pivot
function partitionDutchFlag(a, pivot) {
    let p = a[pivot];
    let less = 0, equal = 0, greater = a.length - 1;

    while (equal < greater ) {
        if (a[equal] < p) {
            if (less !== equal) {
                swap(a, less, equal);
            }
            less++;
            equal++;
        } else if (a[equal] === p) {
            ++equal;
        } else {
            swap(a, equal, greater);
            greater--;
        }
    }

    if (a[equal] < a[less]) {
        swap(a, less, equal);
    }

    console.log(a);
}

array = [9,7,6,5,1,0,3,4,8,4];
//partitionDutchFlag(array, 3);

// 6.2 Write a program which takes asinput an array of digits encoding a decimal number
// D and updates the array to represent the number D + 1. For example, if the input 65
// is (1,2,9) then you should update the array to (1,3,0). Your algorithm should work
// even if it isimplemented in a language that hasfinite-precision arithmetic.

function arbitraryPrecisionInteger(a) {
    let end = a.length - 1;
    let plusOne = a[end] + 1;
    while (plusOne === 10) {
        a[end] = 0;

        if (end > 0) {
            end--;
            plusOne = a[end] + 1;
            if (end === 0 && plusOne === 10) {
                a[end] = 0;
                plusOne = 1;
                a.unshift(plusOne);
            }
        } else {
            plusOne = 1;
            a.unshift(plusOne);
        }

    }

    a[end] = plusOne;
    console.log(a);
    return a;
}

array = [4,7,6];
//arbitraryPrecisionInteger(array);

// 6.5 Delete Duplicates from sorted array
// Write a program which takes an array and removes all duplicates. 
// Return the number of valid elements
function deleteDuplicatesFromSorted(a) {
    if (a.length <= 1) {
        console.log(a);
        return 1;
    }

    let validElements = 1;
    for (let i = 0, j = 1; i < a.length; i++, j++) {
        if (a[i] === a[j]) {
            j++;
            while (a[j] === a[i] && j < a.length - 1) {
                j++;
            }
            
            if (j > (a.length - 1)) {
                a[i+1] = 0;
            } else {
                a[i+1] = a[j];
            }
        } else {
            if (j < a.length && j !== i+1) {
                a[i+1] = a[j];
            } 
            
            if (j > a.length - 1) {
                if (i + 1 < a.length) {
                    a[i+1] = 0;
                }
            }
        }

        if (j < a.length) {
            validElements += 1;
        }
    }

    console.log(a);
    console.log(validElements);
    return validElements;
}

array = [2,3,4,4,4,4,4,5,6,7];//[2,3,3,3,5,5,7,11,11,13]//[2];
//deleteDuplicatesFromSorted(array); 