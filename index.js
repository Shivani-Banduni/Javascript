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

const wadaa=new Promise((resolve,reject)=>{
  setInterval(()=>{
    resolve('success ho gya')
  },1000)
})
const wada=new Promise((resolve,reject)=>{
  console.log('first')
  setInterval(()=>{
    resolve('success')
  },5000)
})


async function main(){
  console.log('second request')

  const id2=await wada // wait here untill executed
console.log(id2)
console.log('third request')
const id=await wadaa;
console.log(id)

console.log('last')
}
main()



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
//     promise2.then((res)=>{
//       console.log(res)
//     })
// promise.then((res)=>{
//   console.log(res)
// })

//   }main()