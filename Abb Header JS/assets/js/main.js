//first task
let icon=document.querySelector('.search-all i')
let input=document.querySelector('.search-input')
let close=document.querySelector('.close')
icon.addEventListener('click',()=>{
   input.classList.toggle('search-active')
   icon.classList.toggle('color-change');
   document.querySelector('.axtar').classList.toggle('color-change');
})
close.addEventListener('click',()=>{
   input.classList.remove('search-active')
   icon.classList.remove('color-change');
   document.querySelector('.axtar').classList.remove('color-change');
})
let az = document.querySelector('.az')
let list=document.querySelector('.list')
az.addEventListener('click',()=>{
   list.classList.toggle('list-active');
   document.querySelector('.arrow-all i').classList.toggle('icon-rotate')
})
//second task
// let box=document.querySelector('.box')
// let area=document.querySelector('.area')
// let x=window.innerWidth
// let y=window.innerHeight
// let countX=0;
// let countY=0;
// document.body.addEventListener('keydown',(e)=>{
// console.log(countX);
//     switch (e.key) {
//         case 'ArrowUp':
//             box.style.top=`${countY-=15}px`
//             break;
//         case 'ArrowDown':
//             box.style.top=`${countY+=15}px`
//             break;
//         case 'ArrowRight':
//             box.style.left=`${countX+=15}px`
//             break;
//         case 'ArrowLeft':
//             box.style.left=`${countX-=15}px`
//             break;
//     }
    
//     if (countX > x/2 - 245 && countX < x/2 + 125 && countY > y/2 - 245 && countY < y/2 + 125 ){
//         area.style.backgroundColor='yellow'
//     }else{
//         area.style.backgroundColor='green'
//     }
// })