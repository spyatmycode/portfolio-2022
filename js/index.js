//Frankly, I made this with almost everything I learnt.
//Jah bless you as you appreciate my work
//Don't spy at my code LOL
//This took like a week to make so yeah


let burger = document.querySelector('.burger')
let mobileNav = document.querySelector('.mobile-nav')
let mainParagraph = document.querySelector('.main-page-paragraph')

let preloader = document.querySelector('.preloader')

let todayDate_year = new Date().getFullYear();
let todayDate_month = new Date().getMonth() + 1;
let todayDate_day = new Date().getUTCDate()

let dateDisplay = document.querySelector('h6');

dateDisplay.textContent = `${todayDate_day}-${todayDate_month}-${todayDate_year}`





function preloaderFunction(){
    
    preloader.style.display = "none"
}

setTimeout(preloaderFunction, 5000)


burger.addEventListener('click', () => {

    burger.classList.toggle('active')
    mobileNav.classList.toggle('mobileHeight')
    


}
)





let skillSet = [
    "Software Engineer",
    "Front End Developer",
    "Fast Intuitive Learner",
    "Computer Science Major",
    "Data Science Enthusiast",
    "Hire Me"

]



// let mainParagraphCount = 0;

// function skillSetParagraph() {
    
//     mainParagraph.textContent = skillSet[mainParagraphCount];
//     mainParagraphCount++


//     if (mainParagraphCount > skillSet.length - 1) {

//         mainParagraphCount = 0
//     }

//     setTimeout(skillSetParagraph, 4000)
// }

skillSetParagraph()

let revealOnScrollElement = document.querySelectorAll('.reveal-on-scroll')

window.addEventListener('scroll', revealScroll)

function revealScroll(){

    for(let count = 0; count< revealOnScrollElement.length; count++){
        
        let windowHeight = window.innerHeight
        let topOfRevealElement = revealOnScrollElement[count].getBoundingClientRect().top
        let revealPoint = 170


        if(topOfRevealElement <= windowHeight - revealPoint){
            revealOnScrollElement[count].classList.add('translate-class')
        }
        else{
            revealOnScrollElement[count].classList.remove('translate-class')
            
        }

        }





}

function submitmessage(){

    let personName = document.querySelector('.full-name')


    return alert("Thank you Mr/Mrs " + personName.value)
}


let footer = document.querySelector('.copyright')

footer.innerHTML = `Copyright &COPY; ${new Date().getFullYear()} Akeju Oluwanifemi <br>Adeola`



