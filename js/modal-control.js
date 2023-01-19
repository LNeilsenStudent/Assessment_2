const openModalButton = document.querySelectorAll('[data-modal-target]')
const closeModalButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('dark-overlay')



// Personal Data goes here: ----------------------------------------------------------------
const alex_info = ["Alex Milnes", "Student Number: s3987656<br><br>Email: <a href=mailto:s3987656@student.rmit.edu.au>s3987656@student.rmit.edu.au</a><br><br>LinkedIn: <a href=https://www.linkedin.com/in/alexmilnesofficial/ target=blank>https://www.linkedin.com/in/<br>alexmilnesofficial/</a>"]
const chris_info = ["Chris Box", "Student Number: s3992802<br><br>Email: <a href=mailto:s3992802@student.rmit.edu.au>s3992802@student.rmit.edu.au</a><br><br>LinkedIn: <a href=https://www.linkedin.com/in/chris-box/ target=blank>https://www.linkedin.com/in/<br>chris-box/</a>"]
const ash_info = ["Ash Choudhry", "Student Number: s3991119<br><br>Email: <a href=mailto:s3991119@student.rmit.edu.au>s3991119@student.rmit.edu.au</a>"]
const lachie_info = ["Lachie Neilsen", "Student Number: s3987677<br><br>Email: <a href=mailto:s3987677@student.rmit.edu.au>s3987677@student.rmit.edu.au</a><br><br>LinkedIn: <a href=https://www.linkedin.com/in/lachlan-nielsen-0459741b4/ target=blank>https://www.linkedin.com/in/<br>lachlan-nielsen-0459741b4/</a>"]
const ida_info = ["Ida Gange", "Student Number: s3338810<br><br>Email: <a href=mailto:s3338810@student.rmit.edu.au>s3338810@student.rmit.edu.au</a>"]
const nathan_info = ["Nathan Stewart", "LinkedIn profile:<br><br><a href=https://www.linkedin.com/in/nathan-s-32946188/ target=blank>https://www.linkedin.com/in/nathan-s-32946188/<br><br></a>"]
// Myer-Briggs data goes here: -------------------------------------------------------------
const alex_mb = ["ENFJ-A", "Extraversion: 71%<br>Intuitive: 59%<br>Thinking: 34%<br>Judging: 78%<br>Assertive: 51%"]
const chris_mb = ["ISTJ-T", "Extraversion: 2%<br>Intuitive: 23%<br>Thinking: 52%<br>Judging: 68%<br>Assertive: 31%"]
const ash_mb = ["ESFJ-A", "Extraversion: 71%<br>Intuitive: 59%<br>Thinking: 34%<br>Judging: 78%<br>Assertive: 51%"]
const lachie_mb = ["INTJ-A", "Extraversion: 43%<br>Intuitive: 66%<br>Thinking: 54%<br>Judging: 58%<br>Assertive: 51%"]
const ida_mb = ["INFJ-T", "Extraversion: 9%<br>Intuitive: 52%<br>Thinking: 43%<br>Judging: 53%<br>Assertive: 25%"]
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
const skills_info = ["Photo by <a href=https://unsplash.com/@cookiethepom target=blank>Cookie the Pom</a>","on <a href=https://unsplash.com/photos/siNDDi9RpVY target=blank>Unsplash</a>"]
const dotnet_info = ["Photo by <a href=https://unsplash.com/@hdbernd target=blank>Bernd Dittrich</a>","on <a href=https://unsplash.com/photos/d_3EKbSg1tg target=blank>Unsplash</a>"]
const quality_info = ["Photo by <a href=https://unsplash.com/@anniespratt target=blank>Annie Spratt</a>","on <a href=https://unsplash.com/photos/QckxruozjRg target=blank>Unsplash</a>"]
const spacejob_info = ["Photo by <a href=https://unsplash.com/@kevinqa target=blank>Kevin Quezada</a>","on <a href=https://unsplash.com/photos/Z8Ybwv9_v8M>Unsplash</a>"]
const html_info = ["Photo by <a href=https://unsplash.com/@jacksonsophat target=blank>Jackson Sophat</a>","on <a href=https://unsplash.com/photos/_t-l5FFH8VA>Unsplash</a>"]

// Other image references (made by us) go here: -------------------------------------------------
const qqc_info = ["Quick Quotes Calculator (QQC)", "This is the icon for QQC calculator, created by the DualCab team."]


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
        case("skills-icon"):
            return skills_info
        case("qqc-icon"):
            return qqc_info
        case("dotnet-icon"):
            return dotnet_info
        case("quality-icon"):
            return quality_info
        case("spacejob-info"):
            return spacejob_info
        case("html-info"):
        return html_info
    }
}
