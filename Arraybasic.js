// //Arrays
// //let marks = Array(6);
// //let mark = new Array(20, 30, 40, 50, 60)

// let marks = [20, 30, 40, 50, 60]
// // console.log(marks[2])
// // marks[3] = 14 
// // console.log(marks)
// // console.log(marks.length)
// // marks.push(70)
// // console.log(marks)
// // marks.pop()
// // console.log(marks)
// // marks.unshift(10)
// // console.log(marks)
// // marks.shift()
// // console.log(marks)
// //index of an element in an array
// //console.log(marks.indexOf(1))
// //Check if an element is present in an array
// //console.log(marks.includes(120))

// //let submarks =marks.slice(2,6)
// //console.log(submarks)
// var sum = 0
// for (let i = 0; i < marks.length; i++){
//     sum = sum + marks [i]

    
// }
// console.log(sum)    

// // reduce filter map
// let  total =marks.reduce((sum , totalMarks)=>sum + totalMarks, 0)
// console.log(total)

// var score = [1, 30, 40, 50, 60]
// var evenScores = score.filter(score => score % 2 == 0)
// console.log(evenScores)

// var doubleScores = score.map(score => score * 2)
// console.log(doubleScores)   

// filer every element in an array greater then 10 and multiply by 3 and sum all the element 
let arr = [1, 20, 30, 40, 50, 60]
let newarr = arr.filter(score => score > 10)
.map(score => score * 3)
.reduce((sum, total)=> sum + total , 0)
console.log(newarr)
