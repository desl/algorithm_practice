let arr = [
  [0,0,0,1],
  [0,0,1,1],
  [0,1,1,1],
  [0,1,1,1]
  ];
  
  let comps;
  
  function numZeroes(arr, fn){
    let result = 0;
    let endPtr = arr[0].length -1; // in example = 3;
    
    for (let i = 0; i < arr[0].length; i++){
      endPtr = fn(arr[i],endPtr);
      result = result + endPtr + 1;
    }
    return result;
  }
  
  function lastZeroLinear(arr,p2){
    p2 = p2 || arr.length -1;
    
    for (let i = p2; i> -1; i--){
      comps ++;
      if (arr[i] === 0) return i;
    }
    return -1;
  }
  
  function lastZero(arr, p2){
    let p1 = 0;
    p2 = p2 || arr.length -1;

    comps ++;
    if (arr[p2] === 0) return p2;
    
    while (p1 !== p2){
      let mid = Math.floor((p1 + p2) / 2);
      comps += 2;
      if (arr[mid] === 0 && arr[mid+1] === 1){
        return mid;
      }
      comps += 2;
      if (arr[mid] === 1 && arr[mid+1] === 1){
        p2 = mid;
      }else{
        p1 = mid;
      }
    }
    return -1;
  }
  
  lastZero([0,0,0,0],3); // 3
  lastZero([0,0,0,1],3); // 2
  lastZero([0,0,1,1],3); // 1
  lastZero([0,1,1,1,1],3); // 0
  // lastZero([1,1,1,1],3); // -1
  // lastZeroLinear([0,0,0,0],3); // 3
  // lastZeroLinear([0,0,0,1],3); // 2
  // lastZeroLinear([0,0,1,1],3); // 1
  // lastZeroLinear([0,1,1,1],3); // 0
  // lastZeroLinear([1,1,1,1],3); // -1
  // var a = performance.now();
  // numZeroes(arr);
  // var b = performance.now();
  // console.log("time taken:", b-1);
  
  function genMatrix(n, factor){
    let result = [];
    let border = n-1;
    factor = factor || .2;
    
    for (let i = 0; i < n; i++){
      let temp = [];
      for (let j = 0; j < n; j++){
        if (j < border){
          temp.push(0);
        } else{
          temp.push(1);
        }
      }
      result.push(temp);
      border = border - Math.floor(Math.random()*border*factor);
    }
    
    console.log(`Matrix Size ${n} x ${n}`);
    return result;
  }
  
  let matrix = genMatrix(1500,.7);

  comps = 0;
  console.log("Binary Search","Zeroes:",numZeroes(matrix, lastZero), "comps:", comps);
  comps = 0;
  console.log("Linear Search","Zeroes:",numZeroes(matrix, lastZeroLinear), "comps:", comps);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
