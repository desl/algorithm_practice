function maxProfit(arr){
    var max = arr[0];
    var maxIdx = 0;
    var min = arr[0];
    var minIdx = 0;
    var thisProfit;
    var maxProfit = 0

    var p1 = 0;
    var p2 = 0

    while (p1 < arr.length -2 && p2 < arr.length -1){
        thisProfit = arr[p2] - arr[p1];
        if (thisProfit > maxProfit){
            null;
        }
        if (arr[p2] - arr[p1] > max - min){
            min = arr[p1]; minIdx = p1;
            max = arr[p2]; maxIdx = p2;
            p2 = p2 === arr.length -1 ? p2 : p2++;
        } else {
            p1++;
            p1 = p1 === arr.length -2 ? p1 : p1++
            p2 = p2 === arr.length -1 ? p2 : p2++;
        }
    }
    return max - min;
}


function maxProfit(arr){
    lowest = arr[0];
    profit = 0;
    i= 1;

    for (i; i<arr.length; i++){
        lowest = Math.min(lowest, arr[i]);
        profit = Math.max(profit, arr[i] - lowest);
    }
    return profit;
}


maxProfit([3,1,6,10,2,8]); // 9
maxProfit([6,6,6,10,4,7]); // 9
// maxProfit([3,2,10]); // 0
