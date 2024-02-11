function solution(a) {
    let first = 0;
    let second = 0;
    let catSum
    let total = 0;
    for(let i = 0; i < a.length; i++) {
        first = a[i].toString()
        for(let j = 0; j < a.length; j++) {
            second = a[j].toString()
            catSum = first + second;
            total = total + parseInt(catSum);
            
        }
    }
    return total;
}


//or for a quickeranswer
 function solution(a) {
    let first = 0;
    let second = 0;
    let total = 0;
    for(let i = 0; i < a.length; i++) {
        first = a[i].toString()
        for(let j = a.length-1; j >= i; j--) {
            second = a[j].toString();
            total = total + parseInt(first+second);
            if (i != j) {
                total = total + parseInt(second+first)
            }
        }
        
    }
    return total;
}
//or

function solution(a) {
    let first = 0;
    let second = 0;
    let total = 0;
    for(let i = 0; i < a.length; i++) {
        first = a[i].toString()
        total = total + parseInt(first + first);
        for(let j = a.length-1; j > i; j--) {
            second = a[j].toString();
            total = total + parseInt(first+second) + parseInt(second+first);
        }   
    }
    return total;
}
