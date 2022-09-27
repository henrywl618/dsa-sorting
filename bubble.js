function bubbleSort(arr) {
    for(let j=0; j<arr.length; j++){
        let swapped = false;
        for(i=0; i<arr.length-j; i++){
            if(arr[i] > arr[i+1]) {
                swapped = true;
                let temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
            }
        }
        //if we did a full pass and didnt swap anything, the array is sorted
        if (!swapped) break;
    }
    return arr
}

module.exports = bubbleSort;