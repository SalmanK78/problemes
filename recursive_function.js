//Practice
var n = 5
for (var i =1;i<=10;i++){
    console.log(i+ ' * '+ n + ' = ' +(i*n) )
}
console.log('result = ' + ((i*n)-n))
console.log('\n')




var n = 15
for (var i =1;i<=10;i++){
    if(i===10){
        console.log('result = ' + i*n)
    }else{
        console.log(i+ ' * '+ n + ' = ' +(i*n) )
    }  
}
console.log('\n')





var n = 20

for (var i =1;i<=10;i++){
    if(i===10){
        console.log(i+ ' * '+ n + ' = ' +(i*n))
        console.log('result = ' + i*n)
    }else{
        console.log(i+ ' * '+ n + ' = ' +(i*n) )
    }
    
}

console.log('\n');

//recursive function


function sayhi(n){
    if(n > 10){
        return 
    }
    console.log('Iam running' + n)
    sayhi(n+1)
}
sayhi(1)

function sum(n){
    if(n===1){
        return 1
    }
    /* console.log(n) */
     return n + sum(n-1)
}
console.log(sum(5)) 

function fact (n){
    if(n===1){
        return 1
    }
    return n * fact(n-1)
}
console.log(fact(5))

var array = [1,3,2,4,5]



//bojtasina

function sumofarray(array,ndx){
    if(ndx < 0){
        return 0
    }
    return array[ndx] + sumofarray(array,ndx -1)
}
console.log(sumofarray(array,array.length - 1))

