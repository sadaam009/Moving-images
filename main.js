let btnone=document.querySelector("#btnpre")
let btntwo=document.querySelector("#btnnext")
let slidingimg=document.querySelector("#img")
let btnimg2=document.querySelector("#img1")

btnone.addEventListener('click', ()=>{
   slidingimg.style.display='none'
    btnimg2.style.display='block'
})
btntwo.addEventListener('click',()=>{
    btnimg2.style.display='none'
    slidingimg.style.display='block'
})
// const images=[
//    "https://www.pexels.com/photo/view-of-cityscape-325185/",
//    "https://images.pexels.com/photos/1619569/pexels-photo-1619569.jpeg?auto=compress&cs=tinysrgb&w=600",
//    "https://images.pexels.com/photos/409127/pexels-photo-409127.jpeg?auto=compress&cs=tinysrgb&w=600",
//    "https://images.pexels.com/photos/417192/pexels-photo-417192.jpeg?auto=compress&cs=tinysrgb&w=600"
// ]
// console.log(images)
// let indeximg=0;
// function currentimg(){
//     slidingimg.src=images[indeximg]
// }
// currentimg()
// btntwo.addEventListener("click", ()=>{
//    if(indeximg<images.length -1){
//        indeximg++;

//    }
//    currentimg()
// })

btnone.addEventListener("click", ()=>{
   indeximg--;
    if(indeximg < 0){
     indeximg=0
    }
    currentimg()
 })
 currentimg()
 
