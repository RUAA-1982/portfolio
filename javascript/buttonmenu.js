let mymenu= document.querySelector(".box-header .menu");
let mymenusvg= document.querySelector(".box-header .menu svg");
let mylinks= document.querySelector(".box-header .links");



mymenu.onclick=function(e){
  
    e.stopPropagation();
    this.classList.toggle("active");
    mylinks.classList.toggle("open");

}
document.addEventListener("click",(e)=>{
    if(e.target!==mymenu&& e.target!== mylinks){
        if(mylinks.classList.contains("open")){
            mymenu.classList.toggle("active");
            mylinks.classList.toggle("open");
        }

    }
})
mylinks.onclick=function(e){
   e.stopPropagation();
}