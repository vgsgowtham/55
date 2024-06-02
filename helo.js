var addss = document.getElementById("ad")
var poll = document.querySelector(".pol")
var form2 = document.querySelector(".form1")
addss.addEventListener("click",function(){
    poll.style.display="block"
    form2.style.display="block"
})
 var cancel=document.getElementById("cancel")
cancel.addEventListener("click",function()
{poll.style.display="none"
    form2.style.display="none"
})
var def=document.getElementById("w")
var five=document.getElementById("five")
var six=document.getElementById("six")
var addss=document.getElementById("addss")
addss.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","dd")
    div.innerHTML=`<h2>${five.value}</h2>
    <h4>${six.value}</h4> <button id="cl" onclick="fun(event)">clear</button>`
   def.append(div)
   poll.style.display="none"
    form2.style.display="none"
   
})
var cl=document.getElementById("cl")
var ddd=document.getElementById("kl")
function fun(event)
{ 
    event.target.parentElement.remove()
}