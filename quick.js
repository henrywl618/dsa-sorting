/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, startIdx = 0, endIdx = arr.length-1){
    let pivotNum = arr[startIdx];
    let pivotIdx;
    let lessThen = [];
    let greaterThen = [];


    for(let i = startIdx+1; i <= endIdx ; i++){
        if(arr[i] < pivotNum) {
            lessThen.push(arr[i])
        } else {
            greaterThen.push(arr[i])
        }
    }

    let lesserIdx = 0;
    let greaterIdx = 0;
    for(let i = startIdx; i <= endIdx ; i++){
        if(lesserIdx < lessThen.length){
            arr[i] = lessThen[lesserIdx];
            lesserIdx++;
        } else if(i === startIdx + lessThen.length) {
            pivotIdx = i;
            arr[i] = pivotNum;
        } else if(greaterIdx < greaterThen.length){
            arr[i] = greaterThen[greaterIdx];
            greaterIdx++;
        }
    }
    //index of the pivot will equal the number of lesser numbers
    return pivotIdx;
}

//// NEED TO FIND A METHOD OF MUTATING THE ARRAY WITHIN CONFINES OF STARTIDX/ENDIDX

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, leftIdx = 0, rightIdx = arr.length-1) {
    if(rightIdx <= leftIdx) {
        return arr
    }
    let pivotPt = pivot(arr, leftIdx, rightIdx);
    console.log(arr)
    quickSort(arr, leftIdx, pivotPt - 1);
    quickSort(arr, pivotPt + 1, rightIdx);
    return arr;
}

module.exports = {quickSort, pivot};