// for(const i =0;i<4;i++){
//     console.log(i)
// }

var n=[1,2,2]
var ar=[]

var s;
var flag=false
for(var i=0;i<n.length;i++){
    if(n[i]!==i){
flag=true
s=n[i]
    }
}
if(flag==true){
   
ar.push(s)
ar.push(i)

}
// const array=ar.map((e)=>e.trim())

console.log(ar)
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