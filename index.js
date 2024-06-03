// console.log("abc");
// console.warn("cde");
// console.error("fgh");
// console.log(typeof(true));
// let a=5;
// console.log(typeof((a)));
// let b=6;
// Number(b);
// let c=a+b;
// console.log(c);
//  let a=6;
//  let b=5;
//  if (a>5) {
//     if (b>5) {
//        document.write("right")
//     }
//     else {
//         document.write("false")
//     }
//  }
//  else{
//     document.write("false a");
//  }
//  if (a>5 && b>5) {
//     document.write("true");
//  }
//  else{
//     document.write("wrong");
//  }
// let a="";
// for (let i= 0; i<=5; i++) {
    
//     for (let j=0; j<=4-i; j++){
//        a +=" "; 
        
//     }

//     for (let l=0; l<2*i-1; l++){ 
//         if( l==0 || i==5 || l==(2*i-2)){
//             a +="*";
//         } 
//         else{
//             a+=" ";
//         }      
//      }
//     a +="\n"  
// }
// console.log(a);
// let a="";
// for (let i= 0; i<=5; i++) {
    
//     for (let j=0; j<=i; j++){
        
//        a +="*"; 
        
//     }
//     a +="\n"  
// }
// console.log(a);
// let a="";
// for (let i= 0; i<=5; i++) {
//     for (let j=0; j<=i; j++){
//        a +=" "; 
        
//     }
//     for (let k = 1; k <=5-i; k++) {
//         a += '*';
//     }
//     a +="\n"  
// }
// console.log(a);
let a="";
for (let i= 0; i<=5; i++) {
    
    for (let j=0; j<i; j++){
       a +=" "; 
        
    }

    for (let l=0; l<2*(5-i)-1; l++){ 
        a +="*";      
     }
    a +="\n"  
}
console.log(a);