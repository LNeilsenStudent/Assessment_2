const openModalButton = document.querySelectorAll('[data-modal-target]')
const closeModalButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('dark-overlay')



// Personal Data goes here: ----------------------------------------------------------------
const alex_info = ["Alex Milnes", "(Student Number: S3987656, General Information: Alex was born in Sydney, Australia, is a loving husband and father of twin boys has relocated to Brazil. He has a diploma in security and risk management, worked as a security operations manager, Hobbies: Playing cricket and rugby. Reading about politics and economics, IT Interest: Alex job profile was also to liaison with the technology department to combat and deter security threats, which got him interested to know about IT and cyber security, IT Experience: Alex has experience with biometrics which he got during his work as security operations manager, Languages: English and Portuguese) "]
const chris_info = ["Chris Box", "write some stuff about chris (stdent No. personal info, etc). write some stuff about chris (stdent No. personal info, etc). write some stuff about chris (stdent No. personal info, etc). write some stuff about chris (stdent No. personal info, etc). write some stuff about chris (stdent No. personal info, etc). write some stuff about chris (stdent No. personal info, etc). write some stuff about chris (stdent No. personal info, etc). "]
const ash_info = ["Ash Choudhry", "write some stuff about ash (stdent No. personal info, etc). write some stuff about ash (stdent No. personal info, etc). write some stuff about ash (stdent No. personal info, etc). write some stuff about ash (stdent No. personal info, etc). write some stuff about ash (stdent No. personal info, etc). write some stuff about ash (stdent No. personal info, etc). write some stuff about ash (stdent No. personal info, etc). write some stuff about ash (stdent No. personal info, etc). "]
const lachie_info = ["Lachie Neilsen", "write some stuff about lachie (stdent No. personal info, etc). write some stuff about lachie (stdent No. personal info, etc). write some stuff about lachie (stdent No. personal info, etc). write some stuff about lachie (stdent No. personal info, etc). write some stuff about lachie (stdent No. personal info, etc). write some stuff about lachie (stdent No. personal info, etc). write some stuff about lachie (stdent No. personal info, etc). "]
const ida_info = ["Ida Gange", "write some stuff about ida (stdent No. personal info, etc). write some stuff about ida (stdent No. personal info, etc). write some stuff about ida (stdent No. personal info, etc). write some stuff about ida (stdent No. personal info, etc). write some stuff about ida (stdent No. personal info, etc). write some stuff about ida (stdent No. personal info, etc). write some stuff about ida (stdent No. personal info, etc). write some stuff about ida (stdent No. personal info, etc). "]
const nathan_info = ["Nathan Stewart", "LinkedIn profile:<br><br><a href=https://www.linkedin.com/in/nathan-s-32946188/ target=blank>https://www.linkedin.com/in/nathan-s-32946188/<br><br></a>"]
// Myer-Briggs data goes here: -------------------------------------------------------------
const alex_mb = ["ENFJ-A", "Extraversion: 71%<br>Intuitive: 59%<br>Thinking: 34%<br>Judging: 78%<br>Assertive: 51%"]
const chris_mb = ["ISTJ-T", "Extraversion: 2%<br>Intuitive: 23%<br>Thinking: 52%<br>Judging: 68%<br>Assertive: 31%"]
const ash_mb = ["ESFJ-A", "Extraversion: 71%<br>Intuitive: 59%<br>Thinking: 34%<br>Judging: 78%<br>Assertive: 51%"]
const lachie_mb = ["INTJ-A", "Extraversion: 43%<br>Intuitive: 66%<br>Thinking: 54%<br>Judging: 58%<br>Assertive: 51%"]
const ida_mb = ["ENFJ-A", "Extraversion: 71%<br>Intuitive: 59%<br>Thinking: 34%<br>Judging: 78%<br>Assertive: 51%"]
// Stock image references go here: -------------------------------------------------------------
const learning_info = ["Photo by <a href=https://unsplash.com/@sickhews?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText target=blank>Wes Hicks</a>","on <a href=https://unsplash.com/photos/4-EeTnaC1S4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText target=blank>Unsplash</a>"]
const microcreds_info = ["Photo by <a href=http://RealToughCandy.com target=blank>RealToughCandy.com</a>","<a href=https://www.pexels.com/photo/man-people-woman-sign-11035385/ target=blank>https://www.pexels.com/photo/man-people-woman-sign-11035385/</a>"]
const climbing_info = ["Photo by <a href=https://unsplash.com/es/@haky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText target=blank>Shamin Haky</a>","on <a href=https://unsplash.com/photos/RIk-i9rXPao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText target=blank>Unsplash</a>"]
const cybersecurity_info = ["Photo by Pixabay","<a href=https://www.pexels.com/photo/security-logo-60504/ target=blank>https://www.pexels.com/photo/security-logo-60504/</a>"]
const banking_info = ["Photo by Kampus Production","<a href=https://www.pexels.com/photo/man-in-black-sitting-behind-a-desk-using-cellphone-8353777/ target=blank>https://www.pexels.com/photo/man-in-black-sitting-behind-a-desk-using-cellphone-8353777/</a>"]
const communication_info = ["Photo by fauxels","<a href=https://www.pexels.com/photo/man-wearing-brown-suit-jacket-3184339/ target=blank>https://www.pexels.com/photo/man-wearing-brown-suit-jacket-3184339/</a>"]
const people_info = ["Photo by <a href=https://unsplash.com/@dylandgillis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText target=blank>Dylan Gillis</a>","on <a href=https://unsplash.com/photos/KdeqA3aTnBY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText target=blank>Unsplash</a>"]
const networking_info = ["Photo by Stefan Lorentz","<a href=https://www.pexels.com/photo/men-wearing-black-shirt-holding-a-purple-book-668137/ target=blank>https://www.pexels.com/photo/men-wearing-black-shirt-holding-a-purple-book-668137/</a>"]
const investment_info = ["Photo by <a href=https://unsplash.com/@towfiqu999999?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText target=blank>Towfiqu barbhuiya</a>","on <a href=https://unsplash.com/photos/nApaSgkzaxg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText target=blank>Unsplash</a>"]
const future_info = ["Photo by Christina Morillo","<a href=https://www.pexels.com/photo/man-standing-infront-of-white-board-1181345/ target=blank>https://www.pexels.com/photo/man-standing-infront-of-white-board-1181345/</a>"]
const challenge_info = ["Photo by <a href=https://unsplash.com/@towfiqu999999?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText target=blank>Towfiqu barbhuiya</a>","on <a href=https://unsplash.com/photos/Jxi526YIQgA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText target=blank>Unsplash</a>"]
const essence_info = ["Photo by <a href=https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText target=blank>Markus Spiske</a>","on <a href=https://unsplash.com/photos/iar-afB0QQw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText target=blank>Unsplash</a>"]
const world_info = ["Photo by <a href=https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText target=blank>NASA</a>","on <a href=https://unsplash.com/photos/Q1p7bh3SHj8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText target=blank>Unsplash</a>"]
const helpdesk_info = ["Photo by <a href=https://unsplash.com/ko/@cdc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText target=blank>CDC</a>","on <a href=https://unsplash.com/photos/_XLJy3h77cw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText target=blank>Unsplash</a>"]
const ideal_info = ["Photo by <a href=https://unsplash.com/@swimstaralex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText target=blank>Alexander Sinn</a>","on <a href=https://unsplash.com/photos/KgLtFCgfC28?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText target=blank>Unsplash</a>"]
const jobs_info = ["Photo by <a href=https://unsplash.com/@jopwell?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText target=blank>The Jopwell Collection</a>","on <a href=https://unsplash.com/photos/u5pAYGDWD54?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText target=blank>Unsplash</a>"]
const advice_info = ["Photo by Anna Shvets","<a href=https://www.pexels.com/photo/cute-rabbit-with-eyeglasses-4588428/ target=blank>https://www.pexels.com/photo/cute-rabbit-with-eyeglasses-4588428/</a>"]
const kid_worker_info = ["Photo by <a href=https://unsplash.com/@little_klein target=blank>Vitolda Klein</a>","on <a href=https://unsplash.com/photos/lAqSzwr5eQc target=blank>Unsplash</a>"]
const phone_use_info = ["Photo by <a href=https://unsplash.com/@mayofi target=blank>Joshua Mayo</a>","on <a href=https://unsplash.com/photos/9hPUf-H7m3s target=blank>Unsplash</a>"]
const code_info = ["Photo by <a href=https://unsplash.com/@ilyapavlov target=blank>Ilya Pavlov</a>","on <a href=https://unsplash.com/collections/421028/programmer target=blank>Unsplash</a>"]

// Events:
openModalButton.forEach(img => {
    img.addEventListener('click', () =>{
        const modal=document.querySelector(img.dataset.modalTarget)
        const content=img.getAttribute('id')
        openModal(modal, getContent(content))
    })
})

closeModalButton.forEach(button => {
    button.addEventListener('click', () =>{
        const modal=button.closest('.modal')
        closeModal(modal)
    })
})

overlay.addEventListener('click', () =>{
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal =>{
        closeModal(modal)
    })
})

// actions
function openModal(modal, content){
    console.log(modal)

    if(modal==null){
        return
    }
    else{
        modal.querySelector('.modal-body').innerHTML=content[1]
        modal.querySelector('.modal-head').innerHTML=content[0]
        modal.classList.add('active')
        overlay.classList.add('active')
    }
}

function closeModal(modal){

    if(modal==null){
        return
    }
    else{
        modal.classList.remove('active')
        overlay.classList.remove('active')
    }
}


// data handling
function getContent(content){
    switch(content){

        case("alex-icon"):
            return alex_info
        case("chris-icon"):
            return chris_info
        case("ash-icon"):
            return ash_info
        case("lachie-icon"):
            return lachie_info
        case("ida-icon"):
            return ida_info
        case("nathan-icon"):
            return nathan_info
        case("alex-mb"):
            return alex_mb
        case("chris-mb"):
            return chris_mb
        case("ash-mb"):
            return ash_mb
        case("lachie-mb"):
            return lachie_mb
        case("ida-mb"):
            return ida_mb
        case("learning-icon"):
            return learning_info
        case("microcreds-icon"):
            return microcreds_info
        case("climbing-icon"):
            return climbing_info
        case("cybersecurity-icon"):
            return cybersecurity_info
        case("banking-icon"):
            return banking_info
        case("communication-icon"):
            return communication_info
        case("people-icon"):
            return people_info
        case("networking-icon"):
            return networking_info
        case("investment-icon"):
            return investment_info
        case("future-icon"):
            return future_info
        case("challenge-icon"):
            return challenge_info
        case("essence-icon"):
            return essence_info
        case("world-icon"):
            return world_info
        case("helpdesk-icon"):
            return helpdesk_info
        case("ideal-icon"):
            return ideal_info
        case("jobs-icon"):
            return jobs_info
        case("advice-icon"):
            return advice_info
        case("kid-worker-icon"):
           return kid_worker_info
        case("phone-use-icon"):
            return phone_use_info
        case("code-icon"):
            return code_info
    }
}
