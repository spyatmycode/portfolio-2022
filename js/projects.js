const projectContainer = document.querySelector('.sub')
const projectToggle = document.querySelector('.show')


const projectsList = [
    {
        link: "https://spyatmycode.github.io/Weather-App/",
        source: "Projects Images/Weather-App.png",
        title: "Weather App",
        description: "Using WeatherApi and AJAX to source Weather updates."


    },
    {
        link: "https://spyatmycode.github.io/Login-Page",
        source: "Projects Images/Login-Page.png",
        title: "Login Page",
        description: "Landing page using HTML, CSS and Javascript",
    },
    {
        link: "http://akejuoluwanifemi-portfolio2.netlify.app",
        source: "Projects Images/previous-portfolio.png",
        title: "Previous Portfolio Site",
        description: "HTML5, CSS Grid, Flex Box and Javascript"
    },
    {
        link: "https://spyatmycode.github.io/My-First-JS-calculator",
        source: "Projects Images/JS-calculator.png",
        title: "Simple Calculator",
        description: "HTML5, CSS Grid, Flex Box and Javascript"
    },
    {
        link: "https://spyatmycode.github.io/Attendance-Counter/",
        source: "Projects Images/people-counter.png",
        title: "Attendance Log",
        description: "HTML5, CSS Flex Box and Javascript"
    },
    {
        link: "https://spyatmycode.github.io/My-First-Count-Down-Timer",
        source: "Projects Images/count-down-timer.png",
        title: "Count Down Timer",
        description: "HTML5, CSS Flex Box and Javascript "
    },
    {
        link: "https://spyatmycode.github.io/Date-Count-Down",
        source: "Projects Images/count-down-timer-for-date.png",
        title: "Date Count Down",
        description: "HTML5, CSS Flex Box and Javascript"
    }
]



function loadProjects() {




    const renderedProjects = projectsList.map((project) => {
        return `<a href="${project.link}">
            <div class="project">
            
                <div class="project-image">
                    <img src="${project.source}"
                        alt="this is supposed to be a project picture lol">
            
            
                    <div class="project-overlay">
                        <h4>
                        ${project.title}
                        </h4>
            
                        <p>
                        ${project.description}
                        </p>
            
                    </div>
            
                </div>
            </div>
            </a>`
    })

    projectContainer.innerHTML = renderedProjects.join('')



}

window.addEventListener('DOMContentLoaded', loadProjects)



function showHideProjects() {

    setTimeout(() => {
        const projects = projectContainer.querySelectorAll('a')

        for(let nifemi = 4; nifemi<=projects.length; nifemi++){
            projects[nifemi].classList.add('showLess')

            projectToggle.addEventListener('click', () => {
                
    
    
                    for (let j = 4; j <= projects.length; j++) {
                        if (projects[j].classList.contains('showLess')) {
                            projects[j].classList.remove('showLess')
                            projectToggle.textContent = 'Show Less'
                        } else {
                            for (let j = 4; j <= projects.length; j++) {
                                projects[j].classList.add('showLess')
                                projectToggle.textContent = 'Show More'
                            }
    
                        }
    
                    }
                
            })
        }

        

    }, 2000)




}

showHideProjects()


