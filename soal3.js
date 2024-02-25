let a = 2
let b = 4
let array=[a,b]

for(i=2; i<10; i++){
    array[i]=array[i-1]+array[i-2]
}
console.log(array)