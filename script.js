//selecting popupbox overlay ad button

var overlay = document.querySelector(".overlaypop")
var popbox = document.querySelector(".popbox")

var add = document.getElementById("return")


add.addEventListener("click",function(){

    overlay.style.display="block"
    popbox.style.display="block"
})


var cancel = document.getElementById("can")

cancel.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popbox.style.display="none"
})


//select container

var conc = document.querySelector(".book")
var adding = document.getElementById("Ad")
var lang = document.getElementById("language")
var found = document.getElementById("founder")
var desc = document.getElementById("description")


adding.addEventListener("click",function(event){
    event.preventDefault()
    var iv=document.createElement("div")
    iv.setAttribute("class","container")
iv.innerHTML = `<h2>${lang.value}</h2>
    <h3><b>${found.value}</b></h3>
    <p>${desc.value}</p>
        <button  onclick="deletebook(event)">delete</button>`
 
        conc.append(iv)


overlay.style.display="none"
    popbox.style.display="none"

})

function deletebook(event){
    event.target.parentElement.remove()
}


