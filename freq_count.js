// https://repl.it/student/submissions/1275199

function numberUniques(arr){
    var count = 0;
    for (let i=0; i< arr.length-1; i++){
        if (arr[i] !== arr[i+1]) count ++;
    }
    if (arr[arr.length-2] !== arr[arr.length-1]) count ++;
    return count;
}

// or

// const numberUniques = (arr) => (arr.reduce((acc,cur, idx) => arr[idx+1] && cur !== arr[idx+1]? acc+1 : acc ,0) + (arr[arr.length-2] !== arr[arr.length-1] ? 1 : 0))

numberUniques([1,1,1,2,2,3,3,4,5]) // 5
numberUniques([1,2,2,3,4]) // 4
numberUniques([8,10,12,12,13,13,15]) // 5
numberUniques([-2,-2,5,6,7]) // 4

function sameNumberOfEvens(a,b){
    var countA = 0;
    var countB = 0;

    var strA = a.toString();
    var strB = b.toString();

    for (let i = 0; i<strA.length; i++){
        if (+strA[i] % 2 === 0) countA++;
    }

    for (let i = 0; i<strB.length; i++){
        if (+strB[i] % 2 === 0) countB++;
    }

    if (countA === countB) return true;
    return false;
}
sameNumberOfEvens(21, 13) // false
sameNumberOfEvens(21, 0) // true

function same(arr1, arr2){
    if (arr1.length !== arr2.length) return false;

    var obj1 = {};
    var obj2 = {};

    for (let i = 0; i<arr1.length; i++){
        obj1[Math.pow(arr1[i],2)] = obj1[Math.pow(arr1[i],2)] + 1 || 1;
    }

    for (let i = 0; i<arr2.length; i++){
        obj2[arr2[i]] = obj2[arr2[i]] + 1 || 1;
    }

    for (let key in obj1){
        if (!obj2[key] || obj1[key] !== obj2[key]) return false;
    }
    return true;
}
// same([2,1,4], [16,4,1]) // true
// same([10,5,6,2,4], [25,36,4,100,16]) // true
same([2,1,2], [4,1,1]) // false (the frequency is not the same)
// same([1,2], [4,1,4]) // false (the frequency is not the same)
