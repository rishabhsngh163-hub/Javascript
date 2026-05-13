// let i = 1 
// while(i<5){
//     console.log(i)
//     i++
// }

// do{
//     console.log(i)
//     i++
// } while(i > 10) 
//     console.log(i)

//     for ( let j = 1 ; j <= 5 ; j++){
//         console.log(j)
//     } 

//     let required = true
//     while(required){
//         console.log("Needed")
//         required = false
//     }

//     console.log (required)
let n = 0

for (let k = 1; k <= 100 ; k++){    
    if (k%2==0 && k%5==0){
        console.log(k)
        n ++ 
        if(n==3){
            
            break
        }

        
    }
   
    console.log(k)  

}
