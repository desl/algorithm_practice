//From repl.it warm up. May 30.
// https://repl.it/student/submissions/1058058

function uniqueDigitCount(exp) {
  let num = 10 ** exp;
  let returnArr = [];

  for (let i = 0; i < num; i++){
      if (checkUniq(i)){
          returnArr.push(i);
      }
  }
  return returnArr;
}

function checkUniq(num){
    str = num.toString();
    str = str.split("");
    mySet = new Set(str);
    if (mySet.size === str.length){
        return true;
    } else {
        return false;
    }
}

uniqueDigitCount(5) // returns an array of numbers that have only unique digits e.g. 6, has one unique digit. 66 has zero.
