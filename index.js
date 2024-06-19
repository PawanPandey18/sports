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
// let a="";
// for (let i= 0; i<=5; i++) {
    
//     for (let j=0; j<i; j++){
//        a +=" "; 
        
//     }

//     for (let l=0; l<2*(5-i)-1; l++){ 
//         a +="*";      
//      }
//     a +="\n"  
// }
// console.log(a);


// const images=[
//     {image:'bat.jpeg'}
//     {image:'boot.jpeg'}
// ]

// let imagesHtml=document.getElementById('images')
// function ImagesShow() {
//     images.map(val,i)=>{
//         if(i===startindex){
//             imagesHtml.innerHTML='<div>'
//         }
//     }
    
// }
const images = [
    { image: 'bat.jpeg' },
    { image: 'boot1.jpeg' },
    { image: 'boot2.jpeg' }
];

let startIndex = 0;
const imagesHtml = document.getElementById('images');

function showImage() {
    imagesHtml.innerHTML = `
        <img src="${images[startIndex].image}" alt="Image" class="w-full h-full object-cover absolute top-0 left-0">
    `;
}

function nextImage() {
    startIndex = (startIndex + 1) % images.length;
    showImage();
}

function prevImage() {
    startIndex = (startIndex - 1 + images.length) % images.length;
    showImage();
}

showImage();

function Slid(a) {
    let 
    
}

