let btn =document.getElementById("btn");
window.onscroll=function(){
    if(scrollY>=532.55810546875){
        btn.style.display="block";
    }else{
        btn.style.display="none";
    } 

}; 


btn.onclick=function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"

    })
};  
 ////////////////////////////////// 

  const continar=document.querySelector(".big");
  const prev=document.querySelectorAll(".slider");
  const next=document.querySelectorAll(".slider2"); 

  function click(){ 
    continar.scrollLeft-=300;

  }

 

