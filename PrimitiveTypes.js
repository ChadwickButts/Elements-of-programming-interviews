function countBits(num) {
    let numBits = 0;

    while (num !== 0) {
        numBits += (num & 1);
        num >>>= 1;
    }
    
    return numBits;
}

countBits(31);

function computeParity(num) {
    let parity = 0;

    // while (num !== 0) {
    //     parity ^= (num & 1);
    //     num >>>= 1;
    // }

    while (num !== 0) {
        parity ^= 1;
        num &= (num - 1);
    }

    console.log(parity);
}

//computeParity(Number.MAX_VALUE);
//computeParity(Number.MAX_SAFE_INTEGER);

function SoE(z) {
    let result = [];
    
    let numArr = new Array(z+1).fill(-1);
    for (let i = 2; i <= z; i++) {
        if (numArr[i] === -1) {
            result.push(i);
        }
        let product = i + i;
        while (product <= z) {
            numArr[product] = 1;
            product += i;
        } 
    }
    console.log(result);
}

SoE(120);