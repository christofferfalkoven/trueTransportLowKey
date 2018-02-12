
var modal = document.getElementById("simpleModal");

var modelBtn = document.getElementById("modalBtn");

var closeBtn = document.getElementsByClassName("closeBtn")[0].value;

window.addEventListener("click", clickOutside);

function openModal(){
        modal.style.display = "block";
}

function closeModal(){
        modal.style.display = "none";
}

function clickOutside(even){
        if(even.target == modal){
        modal.style.display = "none";
        }
}

var modal2 = document.getElementById("simpleModal2");

function openModal2(){
        modal2.style.display = "block";
}

function closeModal2(){
        modal2.style.display = "none";
}

function clickOutside2(even){
        if(even.target == modal2){
        modal2.style.display = "none";
        }
}


var modal3 = document.getElementById("simpleModal3");

function openModal3(){
        modal3.style.display = "block";
}

function closeModal3(){
        modal3.style.display = "none";
}

function clickOutside3(even){
        if(even.target == modal){
        modal3.style.display = "none";
        }
}
