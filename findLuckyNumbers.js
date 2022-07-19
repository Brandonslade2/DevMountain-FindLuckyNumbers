


const luckyNumbers = (n) => {
    let arr = [1,2,3,4,5,6,7,8,9,10]
    let newarr = []
    for (i = 0; i < n; i++) {
        let x = Math.floor(Math.random()*arr.length)
        newarr.push(arr[x])
        arr.splice(x,1)
    }
return newarr
    
}

console.log(luckyNumbers(5))


//learned here that math.random also would need math.floor. and it can be as simple as pushing 

