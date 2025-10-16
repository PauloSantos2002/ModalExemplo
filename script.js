'use strict';

const showModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");

function add() {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}
function remove() {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

// Abrir Modal
for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener("click",() =>{
        remove()
    })  
}

// Fechar modal pelo botão x
closeModal.addEventListener("click",() =>{
    add()
})

// Fechar modal pelo esc
document.addEventListener("keydown",(event) =>{
    if (event.code === "Escape") {
        add()
    }
    
})

// Clicando fora do modal
overlay.addEventListener("click",() =>{
    add()
})