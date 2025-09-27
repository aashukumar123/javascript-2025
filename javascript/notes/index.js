const aashu = document.querySelector(".btn")
const vicky = document.querySelector(".notes-container");
let  sunny =  document.querySelectorAll(".input-box");
 

aashu.addEventListener("click" , () =>{
      let inputbox = document.createElement("p");
      let img =document.createElement("img");
      inputbox.className = "input-box";
      inputbox.setAttribute("contenditable","true");
      img.src="images/delete.png";
      vicky.appendChild(inputbox).appendChild(img);

})
vicky.addEventListener("click" ,function(e){
    if(e.target.tagName ==="IMG"){
        e.target.parentElement.remove();
    }
})