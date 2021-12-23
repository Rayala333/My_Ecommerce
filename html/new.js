// function sum(...args){
//     var result=0;
//     args.forEach((arg)=>result+=arg)
//     return result
// }
// console.log(sum(1,2,3))
// let arr = [10,20,30,40,50]
// console.log(arr.length)  // o/p = 5 

//delete
// console.log(arr.splice(2,1)) //o/p = true
// console.log(arr)
// console.log(arr.length) 

// console.log(delete(arr[2]))  //o/p = true
// console.log(arr.length) 


// arr = 10;
// let arr;
// console.log(arr)  //Cannot access 'arr' before initialization

// arr = 10;
// const arr;
// console.log(arr)   //Missing initializer in const declaration


// let arr;
// arr = 10;
// console.log(arr) //o/p: 10

// const arr;
// arr = 10;
// console.log(arr)  //Missing initializer in const declaration

// const arr =10;
// console.log(arr) // o/p :10
// let a =10;
// {
//     let a =20;
//     console.log(a)
// }
// console.log(a)
// var x =[10,20,30] ;
// x=[50,60]
// console.log(x)

// var a =10
// function my(){
//     var a = 20
//     console.log(a)
// }
// console.log(a)
// // console.log(my())
// my()


// var a =10;
// var a =20;

// console.log(a)

// let a = 100
// console.log([...Array(a).keys()].map((e)=>(e+1)))    // list rendring

// let data =[1,1,1,2,2,2,3,3,3,4,4,4,5,6,7]


// console.log(data.map((e)=>([e])))


// let a = "my name is prasad"
// console.log(a.split(""))


// let a ="prasad"
// let b = Array.from(a)

// console.log(b.join(""))


// let a = Symbol(100)
// let b =Symbol(100)
// // let a =100
// // let b =100

// console.log(a==b)


// let arr1 =['a','b','c']

// var arr2 = arr1
// arr1 =['f']

// console.log(arr2)



//immutable
// let arr1 = ["hello-1","hello-2"]
// let arr2 =[...arr1]
// arr1.push("hello-3")
// arr2.push("hello-4")     
// console.log(arr1)
// console.log(arr2)


//mutable
// let arr1 = ["hello-1","hello-2"]
// let arr2 =arr1
// arr1.push("hello-3")
// arr2.push("hello-4")     
// console.log(arr1)
// console.log(arr2)


// let obj1={
//     name:"prasad",
//     age:27,
//     study:"b-tech",
// };
// let obj2={
//     name:"nani",
//     age:28,
//     hob:"cri"

// }
// // let obj3 = {...obj1,...obj2}
// let obj3 = {...obj1,...obj2,sly:60000}
// console.log(obj3)


//number and strring
// let a ="abcd1234shshsh563902bgt"

// // console.log(a.split(''))

// let b = a.split("")
// // console.log(b.filter(isNaN))  //it is used to filter the string elments
// let c = b.filter(isNaN)
// console.log(c)

// // console.log(b.filter(Number))   //it is used to filter the number elements
// let d = b.filter(Number)

// console.log(d)

// let arr = d.sort((num1,num2)=>{
//     // return num1 - num2
//     return num2 - num1
// })

// console.log(arr)



// let a =[
//     {"A":['s','xl','m']},
//     {"b":['xxl','x','m']},
//     {"c":['l', 'm','s']},   
// ]
// console.log(...A,...b,...a)
// let a =[
//     {"a":[1,2,3]},
//     {"a":[4,5,6]}
// ]

// let arr = [['a','b','c'],['a','b','d'],['b','e']]

// console.log(arr.reduce((f,n)=>{
//     f = f
//     return f 
// }))



// function a(){
//     return function b(){
//         return 10
//     }
// }
// console.log(a()())


// let a ="abcd1234shshsh563902bgt"

// let b = a.split('')
// console.log(b)
// let c = b.filter(Number)
// console.log(c)
// let d = c.sort((num1,num2)=>{
//     return num2 - num1
// })[0]
// console.log(d)


// let a ="hello"

// console.log(Array.from(a))

// let a =10
// console.log(...Array(a).keys())

// if(null){

//     console.log("no")

// }else{
//     console.log("hello")
// }

// console.log(1+"3")


// b=10;

// let b;
// a =10;
// a =10;
// var a
// let a
// console.log(a)
// console.log(b)

// let arr = [xl,l,m,xxl]

// console.log(arr.map((e)=>(e)))

// const arr =["angular" ,"react"]
// console.log(arr.map((e)=>{
//     return Array.from(e).reverse().join("")
// }))


// console.log(arr.reverse())


// const arr = "my name is prasad"


// const arr1 = arr.split()
// console.log(arr1)
// console.log(
// arr1.map((element)=>(
//     Array.from(element).reverse().join("")
// )))


// const arr2 = 'hi hello this is prasad'

// console.log(Array.from(arr2))
// const arr3 = Array.from(arr2)

// console.log(arr3.reverse().join(""))



// const arr4 = ["hi","hello"]

// console.log(arr4.reverse())

// console.log(Array.from(arr4).reverse().join(" "))



// const arr5 = [1,2,3,4,1,2,3,6,7,8]

// console.log(arr5.filter((e,i)=>(
//     arr5.indexOf(e)==i
   
// )))

// const arr6 = [1,2,3,4,1,2,3,5,6,7,8,9,1,7,9]

// const arr7 = [...new Set(arr6)]
// console.log(arr7)


// const arr8 = [1,12,2,3,10,111,14,5,17,20,6]
// const arr9 = arr8.sort((num1,num2)=>(
// //    num1-num2
// num2-num1
// ))
// console.log(arr9)

// ---starting the Array to object and object to Array----

// const my = [["key-1","hello"],["key-2","hello-2"]]

// const obj = Object.fromEntries(my);
// console.log(obj)  // convart to Array to object

// const entries = Object.entries(obj)
// console.log(entries) // convart to object to Array

// const entries1 = Object.values(obj)
// console.log(entries1) // find to array of values

// const entries2 = Object.keys(obj)
// console.log(entries2) // find to array of keys

// ---End the Array to object and object to Array----



const arr = 'hi hello my name'

console.log(Array.from(arr).reverse().join(""))


const arr1 = [1,2,3,4,5]

console.log(arr1.reverse())

const arr2 = '1234567'
console.log(Array.from(arr2).reverse())

console.log(Array.from(arr2).find((e,i)=>(
    e==5
)))
console.log(Array.from(arr2).includes('1'))
