function bowlingScore(arr) {
    var str = arr.join("");
    var score = 0;
    console.log("string",str);

    for (let i=0; i<str.length; i++){
        // score regular points.
        if (i > 0){
            score = score + bScore(str[i], str[i-1]);
        } else {
            score = score + bScore(str[i]);   
        }
        

        // handle strike extra points.
        if (str[i] === "X" && i < str.length-3){
            score = score + bScore(str[i+1]) + bScore(str[i+2],str[i+1]);
        }

        // handle spare extra points.
        if (str[i] === '/' && i< str.length - 2){
            score = score + bScore(str[i+1]);
        }
    }
    return score;
}


// bowlingScore(["00","00","00","00","00","00","00","00","00","00"]) // 0
// bowlingScore(["03","14","61","11","90","81","00","03","22","05"]) // 47
// bowlingScore(["1/","50","00","00","00","00","00","00","00","00"]) // 20
// bowlingScore(["09","21","4/","9/","6/","9/","14","34","90","5/2"]) // 110
// bowlingScore(["X","34","4/","X","7/","X","X","14","54","X00"]) // 144
// bowlingScore(["3/","X","X","X","62","5/","90","9/","X","8/X"]) // 190
// bowlingScore(["X","X","X","X","X","X","X","X","X","XXX"]) // 300


function bScore(str,last){
    const map= {
        "0": 0,
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "X": 10,
        "/": 10-last
    }
    return map[str];
}
