let checkBox = document.getElementById('flexSwitchCheckChecked');
let Monthly = document.querySelectorAll('.dollar');
let Yearly = document.querySelectorAll('.dollar-annually');
let popOut = document.querySelector('.toggle');
let button = document.querySelector('.toggle-btn');

checkBox.addEventListener('change', function(){
    if(checkBox.checked){
         Yearly.forEach(element => element.style.display = 'none');
         Monthly.forEach(element => element.style.display = 'inline');
    } else {
       Yearly.forEach(element => element.style.display = 'inline');
         Monthly.forEach(element => element.style.display = 'none');
    }
});

popOut.addEventListener("mouseover", toggleBox, false);
popOut.addEventListener("mouseout", toggleOut, false);

function toggleBox()
{  
     popOut.setAttribute("style", "background-color:#8f93ea; height:400px; color:white")
     
}

function toggleOut()
{  
     popOut.setAttribute("style", "background-color:white; height:350px; color:black")
}

button.addEventListener("mouseover",event, false);
button.addEventListener("mouseout", anotherEvent, false);

function event(){

     button.setAttribute("style", "background-color:white; border-radius: 5px; color:#8f93ea")
} 
function anotherEvent(){

     button.setAttribute("style", "background-color:#8f93ea; color:white")
} 
