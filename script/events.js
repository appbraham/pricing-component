const checkBox = document.querySelector(".checkbox");
const monthly = document.querySelectorAll(".monthly");
const annually = document.querySelectorAll(".annually");

checkBox.addEventListener('change', ()=> {
    changeState(monthly);
    changeState(annually);
});

function changeState(plan){
    plan.forEach((element)=> element.classList.toggle("activate"));
}
