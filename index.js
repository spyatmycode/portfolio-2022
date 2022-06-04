let burger = document.querySelector('.burger')
let mobileNav = document.querySelector('.mobile-nav')
let mainParagraph = document.querySelector('.main-page-paragraph')

let preloader = document.querySelector('.preloader')







function preloaderFunction(){
    
    preloader.style.display = "none"
}

setTimeout(preloaderFunction, 1000)


burger.addEventListener('click', () => {

    burger.classList.toggle('active')
    mobileNav.classList.toggle('ctive')
    


}
)





let skillSet = [
    "Software Developer",
    "Junior Front End Engineer",
    "Data Scientist",
    "Fast Intuitive Learner",
    "Computer Science Major",
    "Hire Me"

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

function submitmessage(){

    let personName = document.querySelector('.full-name')


    return alert("Thank you Mr/Mrs " + personName.value)
}



