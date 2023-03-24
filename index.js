const searcnBarEL=document.querySelector(".searchBar-container");
const magniEL=document.querySelector(".magnifier");

magniEL.addEventListener("click",()=>{
    searcnBarEL.classList.toggle("active");
})