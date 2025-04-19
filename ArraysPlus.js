
function swap(a, l, r) {
    if (l !== r) {
        a[l] = a[l] + a[r];
        a[r] = a[l] - a[r];
        a[l] = a[l] - a[r];
    }
}

// Reorder an array of integers so that the even entries appear first
function reorderEvenOdd(a) {
    let even = 0, odd = a.length - 1;

    while (even < odd) {
        if (a[even] % 2 === 0) {
            even++;
        } else {
            a[even] = a[even] + a[odd];
            a[odd] = a[even] - a[odd];
            a[even] = a[even] - a[odd];
            odd--
        }
    }

    console.log(a);
}

let array = [9, 7, 6, 5, 1, 0, 3, 4, 8, 4];
//reorderEvenOdd(array);

function partitionDutchFlag(a, pivot) {
    let less = 0;
    let greater = a.length - 1;
    let equal = less;
    let p = a[pivot];

    while (equal < greater) {
        if (a[equal] > p) {
            swap(a, equal, greater);
            greater--;
        } else if (a[equal] === p) {
            equal++;
        } else {
            swap(a, less, equal);
            less++;
            equal++;
        }
    }

    swap(a, less, equal);
    console.log(a);
}

//let a = [9,7,6,5,1,0,3,5,8,4], index = 3; // a[3]= 5 [4,3,0,1,5,5,8,7,6,9]
//partitionDutchFlag(a, index);



function inPlaceQuickSort(a, l, r) {
    if (l >= r) return;
    let less = l;
    let greater = r - 1;
    let mid = Math.floor((l + (r - l) / 2)); // randomize pivot
    swap(a, mid, r);
    let p = a[r];

    while (less <= greater) {
        while (a[less] < p && less <= greater) less++;
        while (a[greater] > p && greater >= less) greater--;
        if (less <= greater) {
            swap(a, less, greater);
            less++, greater--;
        }
    }

    swap(a, less, r);
    inPlaceQuickSort(a, l, less - 1);
    inPlaceQuickSort(a, less + 1, r);
    console.log(a);
}


let a = [9, 7, 6, 5, 1, 2, 0, 3, 5, 8, 4];
//inPlaceQuickSort(a, 0, a.length-1);


function quickSelectSmallest(a, l, r, k) {
    if (a.length === 1) return a[0];

    let less = l, greater = r - 1;
    let median = Math.floor(l + (r - l) / 2);
    swap(a, median, r);
    let pivot = a[r];

    while (less <= greater) {
        while (a[less] < pivot && less <= greater) less++;
        while (a[greater] > pivot && less <= greater) greater--;
        if (less <= greater) {
            swap(a, less, greater);
            less++; greater--;
        }
    }

    swap(a, less, r);
    if (k < less) quickSelectSmallest(a, 0, less - 1, k);
    else if (k === less) { console.log(a[less - 1]); console.log(a); return pivot; }
    else quickSelectSmallest(a, less + 1, r, k);
}

//quickSelectSmallest(a, 0, a.length-1, 3);

function quickSelectLargest(a, l, r, k) {
    if (a.length === 1) return a[0];

    let greater = l, less = r - 1;
    let median = Math.floor(l + (r - l) / 2);
    swap(a, median, r);
    let pivot = a[r];

    while (greater <= less) {
        while (a[greater] > pivot && greater <= less) greater++;
        while (a[less] < pivot && greater <= less) less--;
        if (greater <= less) {
            swap(a, less, greater);
            greater++; less--;
        }
    }

    swap(a, greater, r);
    if (k < greater) quickSelectLargest(a, 0, greater - 1, k);
    else if (k === greater) { console.log(a[greater - 1]); console.log(a); return pivot; }
    else quickSelectLargest(a, greater + 1, r, k);
}

//quickSelectLargest(a, 0, a.length-1, 4); // 9,7,6,5,1,0,3,5,8,4


function advancingThrough(a) {
    let i = 0, maxReach = 0;

    while (i <= maxReach) {
        maxReach = Math.max(a[i] + i, maxReach);
        if (maxReach >= a.length - 1) {
            console.log(true);
            return true;
        }
        i++;
    }
    console.log(false);
    return false;
}

array = [3, 2, 0, 0, 2, 0, 1]; //[3,3,1,0,2,0,1];
//advancingThrough(array);


function reverseString(s) {
    if (s.length === 1) {
        return s;
    }

    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        s[i] = String.fromCharCode(s[i].charCodeAt(0) ^ s[j].charCodeAt(0));
        s[j] = String.fromCharCode(s[i].charCodeAt(0) ^ s[j].charCodeAt(0));
        s[i] = String.fromCharCode(s[i].charCodeAt(0) ^ s[j].charCodeAt(0));
    }

    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            for (let k = i - 1; j < k; j++, k--) {
                s[j] = String.fromCharCode(s[j].charCodeAt(0) ^ s[k].charCodeAt(0));
                s[k] = String.fromCharCode(s[j].charCodeAt(0) ^ s[k].charCodeAt(0));
                s[j] = String.fromCharCode(s[j].charCodeAt(0) ^ s[k].charCodeAt(0));
            }
            j = i + 1;
        }
    }

    for (let k = s.length - 1; j < k; j++, k--) {
        s[j] = String.fromCharCode(s[j].charCodeAt(0) ^ s[k].charCodeAt(0));
        s[k] = String.fromCharCode(s[j].charCodeAt(0) ^ s[k].charCodeAt(0));
        s[j] = String.fromCharCode(s[j].charCodeAt(0) ^ s[k].charCodeAt(0));
    }

    console.log(s);
    return s;
}

let s = "Alice likes Bob";
let sArray = ["A", "l", "i", "c", "e", " ", "l", "i", "k", "e", "s", " ", "B", "o", "b"];
reverseString(sArray);

let words = ["te", "pl", "at", "ac"];

words.sort((a,b) => {
    let i = 0;
    while (true) {
        if (a[i] < b[i] || a[i] === undefined && b[i]) {
            return -1;
        } else if (a[i] > b[i] || b[i] === undefined && a[i]) {
            return 1;
        } else {
            i++;
        }
    }
});


console.log(words);