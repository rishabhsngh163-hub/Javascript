let i =0
const n=7
while(i<10){
    i++
    console.log(i*n)
}
let flag = true
if(!flag){
    console.log("Hello")
}
else{
    console.log("Hi")
}
let i1 = 0
let required = true
while(required){
    console.log("Needed")
    required = false
    i1++
}
console.log("$$$$$$")
let n1 = 0
for (let k = 1; k <= 100 ; k++){
    if (k%2==0 && k%5==0){
        console.log(k)
        n1++
        if(n1==3){
            break
        }
        
    }
    
}
