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