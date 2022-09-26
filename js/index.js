//Frankly, I made this with almost everything I learnt.
//Jah bless you as you appreciate my work
//Don't spy at my code LOL
//This took like a week to make so yeah

//This is September 26th and something strange is happening with the way I link m JS to my html
//It seems as though this index.js file has refused to operational due the way I have all scripts linked to one file
//I'm working on it.

let burger = document.querySelector('.burger')
let mobileNav = document.querySelector('.mobile-nav')
let mainParagraph = document.querySelector('.main-page-paragraph')








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



