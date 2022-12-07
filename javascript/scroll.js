window.onscroll= function(){
  if(window.pageYOffset>1000){
    document.querySelectorAll(".exp-degree").forEach(item=>{
        item.style.width= item.dataset.width;
    })
  }
    
   
}
