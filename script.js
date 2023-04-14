const burger=document.querySelector('.burger')
const links= document.querySelector('.links')

burger.addEventListener("click",()=>{
    // console.log("hello");
links.classList.toggle("active");
});