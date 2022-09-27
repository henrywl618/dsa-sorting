function getDigit(number, digit) {
    return Math.floor((number / Math.pow(10, digit)) % 10);
}

function digitCount(number) {
    return number.toString().length
}

function mostDigits(arr) {
    let most = 0;
    for(let num of arr){
        let digits = digitCount(num);
        if( digits > most) most = digits;
    }
    return most;
}

function radixSort(arr) {
    const maxDigits = mostDigits(arr);

    const sort = (arr, digit)=>{
        const buckets = [[],[],[],[],[],[],[],[],[],[]]

        for(let num of arr){
            let digitNum = getDigit(num, digit)
            buckets[digitNum].push(num)
        }

        if(buckets[1].length === 0 && digit === maxDigits) return;
    
        let index = 0;
        for(let bucket of buckets){
            for(let num of bucket){
                arr[index] = num;
                index++;
            }
        }

        sort(arr, digit + 1);
    };
    sort(arr, 0);

    return arr;
}

module.exports = {radixSort, getDigit, digitCount, mostDigits};