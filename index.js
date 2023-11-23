// for(const i =0;i<4;i++){
//     console.log(i)
// }

// var n=[1,2,2]
// var ar=[]

// var s;
// var flag=false
// for(var i=0;i<n.length;i++){
//     if(n[i]!==i){
// flag=true
// s=n[i]
//     }
// }
// if(flag==true){
   
// ar.push(s)
// ar.push(i)

// }


// console.log(ar)
// n.toString()
// var nn="jhdshkshdsk s d skd"
// var v=nn.split(" ")
// console.log(n)





//promise
// function promise (){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("result")
//         },4000)
//     })
    
// }
// promise().then((result)=>{
//     console.log('resolver resolved')
// }).catch((err)=>{
//     console.log('resolver rejected')
// })





// async function promise(){
// const data= setTimeout(()=>{

// },4000)
// }



//    unlinke regular functions arrow functions does not support this keyword. this keyword does not refer to it's current 
// context but the global context like window 

// var a=10
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter())


// const mouse={
//     name: 'mousee'
// };
// const rat={
//     mousee: 'ratt',
//     beared: true
// };
// console.log(rat[mouse.name])
// console.log(rat[mouse["name"]])
// console.log(rat.mouse["name"])


// const a=new Number(2)
// console.log(a)




// function bark() {
//     console.log('Woof!');
//   }
  
//   bark.animal = 'dog';
//   console.log(bark)




// const member = new Person('Lydia', 'Hallie');
// console.log(member)

// Usestrict stops to behave like regular expressions.

// function getAge() {
//    'use strict';
//   age = 21;
//   console.log(age);
// }

// getAge();



// function main(){
//   console.log('start')
// function promise(){
//   return new Promise((resolve,reject)=>{
//     console.log('hi')
// setTimeout(()=>{
// resolve('Hurray Promise')
// },2000)

//   })
// }
// promise().then((res)=>{
//   console.log(res)
//   console.log(res)
// }).catch((err)=>{
//   console.log(err)
// })
// console.log('end promise')
// }
// main()
// const id=new Promise (setTimeout(() => {
//   console.log('await1',id)
// }, 10000));
// const id2= new Promise(setTimeout(()=>{
//   console.log('waada timeout2',id2)
// },1000))






// Async Function

// const wadaa=new Promise((resolve,reject)=>{
//   setInterval(()=>{
//     resolve('success ho gya')
//   },1000)
// })
// const wada=new Promise((resolve,reject)=>{
//   console.log('first')
//   setInterval(()=>{
//     resolve('success')
//   },5000)
// })


// async function main(){
//   console.log('second request')

//   const id2=await wadaa // wait here untill executed
// console.log(id2)
// console.log('third request')
// const id=await wada;
// console.log(id)

// console.log('last')
// }
// main()



// Using Promise

// const promise=new Promise((resolve,reject)=>{
//   console.log('promise2')
// setTimeout(()=>{
// resolve('success')
// },4000)
// })


// const promise2=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//   resolve('success2')
//   },1000)
//   })
//   function main(){
//     console.log('main1')
//     promise.then((res)=>{
//       console.log(res)
//     })
// promise2.then((res)=>{
//   console.log(res)
// })

//   }main()














// let ar;
// const arr=['ram','shyam','sita','gira']
// var arr2 = arr.filter((e)=>{
//     return e!=='ram'
// })
// console.log(arr2)





// console.log(a);
// let a;






// find the second maximum

// const arr=[10,6,89,5,12]
// var max=-Infinity
// var secondmax=-Infinity
// for(var i=0;i<arr.length;i++){
// if(arr[i]>max){
//     max=arr[i]
//     secondmax=max
// }else if(arr[i]<max && arr[i]>secondmax){
//     secondmax=arr[i]
// }
// }console.log(secondmax)






// const data=new Number(3)
// console.log(data)




// const obj={
//     name:'ram',
//     wife:'site',
//      fn:function(){
//         console.log('hi')
//     }
// }
// console.log(obj.name)

// for(let key in obj){
//      console.log(obj[key])
//     console.log(key)
// }

// delete obj.name

// console.log(obj.fn())
// console.log(obj)








// function some(arr,fn){
//     console.log('hiii')
// return fn(arr)
// }

// function add(arr){
//     var sum=0
//     for(var i=0;i<3;i++){
//  sum+=arr[i]
//     } return sum


// }



// function mult(arr){
//     var m=1;
//     for(var i=0;i<arr.length;i++){
//         m=m*arr[i]
//     }return m
// }

// console.log(some([2,4,5],add))
// console.log(some([2,4,5],mult))









// CALLBACK FUNCTIONS

// function some(arr,n,fn){
//     return  fn(arr,n)
// }


// function isEven(arr,n){
//     var flag=0
// for(var i=0;i<n;i++){
//     if(arr[i]%2==0){
//         flag++
//     }
    
// }
// if(flag==n){
//     return true
// }return false
// }



// function isPrime(arr,n){
// for(var i=0;i<n;i++){
//     return square(arr,i,n)
// }
// }

// function square(arr,i,n){
//     console.log('n',n)
//     var s=0
//     for(var j=3;j<Math.sqrt(arr[i]);j++){
//         if((arr[i]%j)!==0){
//             s++
//         }
//     }
//     if(s==n || arr[i]==2 ){
//         return true
//     }{
//         return false
//     }
// }

// console.log(some([2,4,6], 3, isEven)) 
// console.log(some([2,3,4], 3, isEven)) // should print false
// console.log(some([2,3,11], 4, isPrime)) // should print false
// console.log(some([2,3,5,9], 3, isPrime)) // should print true



// function getAge() {
// 'use strict'
//     age = 21;
//     console.log(age);
//   }
  
//   getAge();
  





// const res=eval('10+10'+20)
// console.log(res)







// function some(ar,n,fn){
//     return fn(ar,n)
// }


// function isEven(ar,n){
//     for(var i=0;i<n;i++){
//         if(ar[i]%2==0){
//            return true
//          }else{

//              return false;
//              break;

//          }
//     }
    
   
// }


// console.log(some([2,4,6], 3, isEven)) // should print true
// console.log(some([2,3,4], 3, isEven)) // should print false
// console.log(some([2,3,11], 4, isPrime)) // should print false
// console.log(some([2,3,5,9], 3, isPrime)) // should print true








// var ar=[34,89,56,12,60];
// var max=-Infinity;
// var secondmax=-Infinity;
// for(var i=0;i<ar.length;i++){
//     if(max<ar[i]){
//         max=ar[i]
//         secondmax=max
//     }
//     else if(max>ar[i] && secondmax<ar[i]){
//         secondmax=ar[i]
//     }

// }
// console.log(secondmax)











// ques 1


// function some(ar,n,fn){
//     return fn(ar,n)
// }



// function isEven(ar,n){
//     var m=0
//     for(var i=0;i<n;i++){
// if(ar[i]%2==0){
//     m++
// }
//     }if(m==n){
//         return true
//     }else{
//         return false
//     }
// }




// function isPrime(ar,n){
//     let flag=true;
//     // let num=0
//     for(var i=0;i<n;i++){
// for(var j=3;j<=Math.sqrt(i);j++){
//     if(ar[i]%j==0){
//         flag=false
//         break
//     }
   
// }if(flag==true && (ar.length>n || ar.length==n)){
//     return true
// }else {
//     return false
// }
//     }
// }


// console.log(some([2,4,6], 3, isEven)) // should print true
// console.log(some([2,3,4], 3, isEven)) // should print false
// console.log(some([2,3,11], 4, isPrime)) // should print false
// console.log(some([2,3,5,9], 3, isPrime)) // should print true









// ques 2

// function createFibonacciGenerator(){
//     let pre= 0; let cur = 1;
//     return function() {
//         if(pre==0) {  pre= 1
//             return 
//         } else {
//             let next = pre
//             pre=cur
//             cur=next+cur}
//     }
// }


// let fibonacciGenerator = createFibonacciGenerator()
// console.log(fibonacciGenerator()) // should print 0
// console.log(fibonacciGenerator()) // should print 1
// console.log(fibonacciGenerator()) // should print 1
// console.log(fibonacciGenerator()) // should print 2
// console.log(fibonacciGenerator()) // should print 3
// console.log(fibonacciGenerator()) // should print 5
// console.log(fibonacciGenerator()) // should print 8






// array destructing

// let arr=['shiv','goa']
// let arrr=[...arr,'ravina']
// console.log(arrr)



// var obj={
//     name:'shiv',class:'6'

// }

// let objj={...obj}
// console.log(objj)





// HOISTING





//function expressions are not hoisted not the arrow function it will give reference error.

// mainn ()
// console.log('HIHIIII')
// let mainn=function main(){
//     console.log('hi')
// }



// main()
// const main=()=>{
//     console.log('arrow function')
// }







// function add(x=2, y=3){
//     return x+y
// }
// console.log(add())



// pure components
// function add(x,y){
// return x+y
// }console.log(add(2,3))


// Impure Component 
// let sum=0;
// function add(x){
// return sum=sum+x
// }
// console.log(add(10))
// console.log(add(10))





// Object keys and values

// const obj={name:'shiv',class:'4th ', family:'good'}
// console.log(Object.values(obj))
// const r=Object.values(obj).some((value=> value==' '))
// console.log(r)









// const ques = [
//     {
//         question: 'Which is the hottest planet in our solar system?',
//         answers: [
//             { ans: 'Jupiter', isCorrect: false },
//             { ans: 'Mars', isCorrect: true },
//             { ans: 'Mercury', isCorrect: false },
//             { ans: 'Saturn', isCorrect: false }
//         ]
//     },


//     {
//         question: 'hi there?',
//         answers: [
//             { ans: 'Jupiter', isCorrect: false },
//             { ans: 'Mars', isCorrect: true },
//             { ans: 'Mercury', isCorrect: false },
//             { ans: 'Saturn', isCorrect: false }
//         ]
//     },
   
// ];
// console.log(ques[0].question)









// Ways of creating a Object

// 1) By unsing Object literal 
// eg - var obj={name:'shiv'}

// 2)By uning object constructor, javascript has inbuilt object constructor;
// let obj= Object();
// console.log(obj)


// 3) By creating a function constructor, NOTE - arrow function does not support this . it does not have it's own this context.
// function Person(name) {
//     this.name = name;
//     this.age = 21;
//   }
//   var object = new Person("Sudheer");
//   console.log(object)




// What is a prototype chain
// Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.





// Slice and Splice
// let arr=[34,5,2,3,54,89]
// let a=arr.slice(0,2)
// console.log(a)



//  let arr=[1,2,3,4,5,6]
//  arr.splice(0,2,'apple','mango','grapes')
//  console.log(arr)





// console.log([]==[]) false
// console.log([]===[]) false










// let uri = "https://fakestoreapi.com/products";
// let encoded_uri = encodeURI(uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log(encoded_uri,'encode')
// console.log(decoded_uri,'decode')












// function main(){
//   console.log('start')
// function promise(){
//   return new Promise((resolve,reject)=>{
//     console.log('hi')
// setTimeout(()=>{
// resolve('Hurray Promise')
// },2000)

//   })
// }
// promise().then((res)=>{
//   console.log(res)
//   console.log(res)
// }).catch((err)=>{
//   console.log(err)
// })
// console.log('end promise')
// }
// main()
// const id=new Promise (setTimeout(() => {
//   console.log('await1',id)
// }, 10000));
// const id2= new Promise(setTimeout(()=>{
//   console.log('waada timeout2',id2)
// },1000))






// Async Function

// const wadaa=new Promise((resolve,reject)=>{
//   setInterval(()=>{
//     resolve('success ho gya')
//   },1000)
// })
// const wada=new Promise((resolve,reject)=>{
//   console.log('first')
//   setInterval(()=>{
//     resolve('success')
//   },5000)
// })


// async function main(){
//   console.log('second request')

//   const id2=await wadaa // wait here untill executed
// console.log(id2)
// console.log('third request')
// const id=await wada;
// console.log(id)

// console.log('last')
// }
// main()














