function search(){
    let a=prompt("Enter The Movie Name ");
    if (a=='Dunki')
    window.location.href="dunki.html";
    
else
 if(a=='Animal')
    window.location.href="animal.html";

else
 if(a=='Salaar')
window.location.href="salaar.html";

else 
if(a=='Aquaman')
    window.location.href="aquaman.html";

else
    window.location.href="facebook.html";
}
var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display="none"
})