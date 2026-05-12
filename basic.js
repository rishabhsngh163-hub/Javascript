console.log("Hello World") ;

//before es6 we used var to declare a variable but now we have let and const
//var is function scoped but let and const are block scoped
//let and const are not hoisted but var is hoisted
//let and const cannot be redeclared but var can be 

let a = "Rishabh"
console.log(typeof(a))

//Data types in javascript
//1. Primitive data types
//String, Number, Boolean, Null, Undefined, Symbol
//2. Non-primitive data types
//Object, Array, Function   

let b = true
console.log(!b)


//symbol is a unique and immutable data type that can be used as a key for object properties
let sym1 = Symbol("Rishabh")
// let sym2 = Symbol("Rishabh")
console.log(sym1) //false because each symbol is 

let flag = true
if(!flag){
    console.log("Condition Satisfied ")
    }
    else{
        console.log("Condition Not Satisfied")      
    }
   console.log(flag)

    // while(flag){
    //     console.log("Condition Satisfied ")
        
    // }