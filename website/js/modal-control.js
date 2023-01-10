const openModalButton = document.querySelectorAll('[data-modal-target]')
const closeModalButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('dark-overlay')

console.log(closeModalButton)




// Events:
openModalButton.forEach(img => {
    img.addEventListener('click', () =>{
        const modal=document.querySelector(img.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButton.forEach(button => {
    button.addEventListener('click', () =>{
        const modal=button.closest('.modal')
        closeModal(modal)
    })
})


function openModal(modal){
    if(modal==null){
        return
    }
    else{
        modal.classList.add('active')
        overlay.classList.add('active')
    }
}

function closeModal(modal){
    console.log(modal)

    if(modal==null){
        return
    }
    else{
        console.log(modal)

        modal.classList.remove('active')
        overlay.classList.remove('active')
    }
}


function debug(){
    console.log("DEGUB_STRING")
}

