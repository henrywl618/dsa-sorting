function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++){
        for(let j = 0; j < i; j++){
            if(arr[i] < arr[j]){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp
            }
        }
    }
    return arr
}

module.exports = insertionSort;