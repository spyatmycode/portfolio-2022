let burger = document.querySelector('.burger')
let mobileNav = document.querySelector('.mobile-nav')
let mainParagraph = document.querySelector('.main-page-paragraph')

let preloader = document.querySelector('.preloader')



function preloaderFunction(){
    
    preloader.style.display = "none"
}

setTimeout(preloaderFunction, 6000)


burger.addEventListener('click', () => {

    burger.classList.toggle('active')
    mobileNav.classList.toggle('ctive')

}
)

let skillSet = [
    "Software Developer",
    "Data Analyst",
    "Data Science Expert"
]

let mainParagraphCount = 0;

function skillSetParagraph() {
    
    mainParagraph.textContent = skillSet[mainParagraphCount];
    mainParagraphCount++


    if (mainParagraphCount > skillSet.length - 1) {

        mainParagraphCount = 0
    }

    setTimeout(skillSetParagraph, 3000)
}

skillSetParagraph()

let revealOnScrollElement = document.querySelectorAll('.reveal-on-scroll')

window.addEventListener('scroll', revealScroll)

function revealScroll(){

    for(let count = 0; count< revealOnScrollElement.length; count++){
        
        let windowHeight = window.innerHeight
        let topOfRevealElement = revealOnScrollElement[count].getBoundingClientRect().top
        let revealPoint = 120


        if(topOfRevealElement < windowHeight - revealPoint){
            revealOnScrollElement[count].classList.add('translate-class')
        }
        else{
            revealOnScrollElement[count].classList.remove('translate-class')
            
        }

        }





}

