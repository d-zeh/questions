function solution(a) {
    
    let scoreBoard = [0,0,0,0,0,0,0,0,0,0];
    let integer = 0;
    for(let i = 0; i < a.length; i++) {
        integer = a[i].toString().split("");
        for(let j = 0; j < integer.length; j++){
            scoreBoard[integer[j]]++;
        }
    }
    let max = 0;
    for(let k = 0; k < scoreBoard.length; k++) {
        if(max < scoreBoard[k]) {
            max = scoreBoard[k]
        }
    }  
    let solution = [];
    for(let m = 0; m < scoreBoard.length; m++) {
        if( max === scoreBoard[m]) {
            solution.push(m);
        }
    }
    return solution;
}


