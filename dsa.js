// var num= 1284;

// function rec (num){
//     if(num.toString().length===1){
//         return num
//     }
//     var sum = num.toString().split("").map(Number).reduce((a,b)=>a+b)
//     return rec(sum)
// }

// console.log(rec(num))




// function fac(n){
// if(n==0 || n==1){
//     return 1
// } return n*fac(n-1)
// }
// console.log(fac(5))






// function sum(n){
// if(n.toString().length==1){
//     return n
// }
// else {
//     let summ= n.toString().split('').map(Number).reduce((a,c)=> a+c)
//     return sum(summ)
// }
// }
// console.log(sum(1238))






// Find second maximum in the array
// const arr=[10,6,89,5,12]
// var max=-Infinity
// var secondmax=-Infinity
// for(var i=0;i<=arr.length-1;i++){
// if(arr[i]>max){
//     secondmax=max
//     max=arr[i]
  
// }else if(arr[i]<max && arr[i]>secondmax){
//     secondmax=arr[i]
// }
// }console.log(secondmax)






// Given an array A[] of n numbers and another number x, the task is to check whether or not there exist two elements in A[] whose sum is exactly x. 
// function main(){
//     let arr = [0, -1, 2, -3, 1]
//  let x= -2;
//  let sortarr=arr.sort((a,b)=>{ return a-b})

// let left=0
//  let right=sortarr.length-1;
// while( left<right ){
//     if(sortarr[left]+sortarr[right]==x){
//         return 1
//     }
//     else if(sortarr[left]+sortarr[right]>x){
//         right--;
//     }
//     else if(sortarr[left]+sortarr[right]<x){
//         left++
//     }
// }return 0
// }
// console.log(main())





// function main(){
//     let x=-2;
//     let arr = [0, -1, 2, -3, 1]
//     let sortedarr=arr.sort((a,b)=>{return a-b})
//     let left=0; let right=sortedarr.length-1;
//     while(left<=right){
//         let m = Math.floor(left+right)/2;
//         if(sortedarr[m]>x){
//             right=m-1
//         }else if(sortedarr[m]<x){
//             left=m+1
//         }else if(sortedarr[m]==x){
//             return 1
//         }
//     }
//     return 0
// }
// console.log(main())




// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 1




// function main(){
//     for(var i=5;i>=0;i--){
//         let res=' ';
//         if(i==2){
//         continue;
//         }
//         for(var j=i;j>0;j--){
//         res+=j + ' ';
//         }
//         console.log(res)
//         }
// }main()





async function main(){
    return 1
}
console.log(typeof( main()))