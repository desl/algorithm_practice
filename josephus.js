function josephus(n,k){

    var arr = new Array(n);
    for (let i =1; i<=n;i++){
        arr[i-1] = i;
    }
    let ptr = 0;

    while (arr.length > 1){
        ptr = ptr + k -1;

        while (ptr > arr.length-1){
            ptr = ptr - arr.length;
        }

        arr.splice(ptr,1);
    }
    return arr[0];
}

// josephus(5, 2); // 3
// josephus(10, 3); // 4
// josephus(12, 5); // 1
// josephus(8, 4); // 6
