function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++){
        let minIndex = i;
        for(let j = i; j < arr.length; j++){
            if(arr[j] < arr[minIndex]) minIndex = j
        }
        if(arr[i] != arr[minIndex]){
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

module.exports = selectionSort;