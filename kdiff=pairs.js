//https://leetcode.com/problems/k-diff-pairs-in-an-array/#/description

var findPairs = function(nums, k) {
    var count = 0;
    var numSet = new Set(nums);
    if (k < 0) return 0;
    if (k === 0){
       var newSet = new Set();
       var answerSet = new Set();
       for (let i = 0; i< nums.length; i++){
           if (!newSet.has(nums[i])){
               newSet.add(nums[i])
           } else {
               answerSet.add(nums[i]);
           }
       } 
       return answerSet.size;
    }
    
    console.log(numSet)
    numSet.forEach( n => {
        console.log("checking n");
        numSet.has(n-k) ? count ++ : null
        })

    return count;
};
