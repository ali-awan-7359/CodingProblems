function myConcat(arr1, arr2) {
    var result = [];
    
    // Copy elements from arr1
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
    }

    // Copy elements from arr2
    for (let i = 0; i < arr2.length; i++) {
        result.push(arr2[i]);
    }

    return result;
}

function bSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function medianOfTwoArrays(arr1, arr2) {
    var arr3 = myConcat(arr1, arr2);

    arr3 = bSort(arr3);

    if (arr3.length % 2 === 0) {
        return (arr3[arr3.length / 2 - 1] + arr3[arr3.length / 2]) / 2;
    } else {
        return arr3[Math.floor(arr3.length / 2)];
    }
}


var nums1 = [1, 3];
var nums2 = [2, 4];
console.log(medianOfTwoArrays(nums1, nums2));
