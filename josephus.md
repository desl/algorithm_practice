There are n people standing in a circle. They are numbered from 1 through n in clockwise direction. The counting out begins at person #1 and continues around the circle in a clockwise direction. In each step, k-1 people are skipped and the next person -- that is, the kth person -- is removed from the circle. 

The elimination proceeds around the circle (which is becoming smaller and smaller as people get removed). Write a function called josephus. The task is to find the place in the initial circle that would guarantee a win.

This function should accept two numbers (n and k) and return the index of the winning place.

If you're wondering why this function is called josephus - you can read more about it AFTER YOU SOLVE THE PROBLEM (https://en.wikipedia.org/wiki/Josephus_problem).

Here are a few examples:

josephus(5, 2); // 3
josephus(10, 3); // 4
josephus(12, 5); // 1
josephus(8, 4); // 6

Good luck!

PS: The tests check the values of josephus(n, k) for n and k between 1 and 12. Here are the values:

'''javascript
var answers = [
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [2,1,2,1,2,1,2,1,2,1,2,1],
  [3,3,2,2,1,1,3,3,2,2,1,1],
  [4,1,1,2,2,3,2,3,3,4,4,1],
  [5,3,4,1,2,4,4,1,2,4,5,3],
  [6,5,1,5,1,4,5,3,5,2,4,3],
  [7,7,4,2,6,3,5,4,7,5,1,1],
  [8,1,7,6,3,1,4,4,8,7,4,5],
  [9,3,1,1,8,7,2,3,8,8,6,8],
  [10,5,4,5,3,3,9,1,7,8,7,10],
  [11,7,7,9,8,9,5,9,5,7,7,11],
  [12,9,10,1,1,3,12,5,2,5,6,11]
];
'''

// josephus(n, k) is equal to
// answers[n - 1][k - 1]

