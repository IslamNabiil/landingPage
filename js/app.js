// Global variables
const sections = document.querySelectorAll('section')
const ul = document.querySelector('ul')

// Build the navBar
window.addEventListener('DOMContentLoaded', BuildNav )//when the page is loaded 
function BuildNav() {
    // first createDocumentFragment for the performance
    const fragment = document.createDocumentFragment();
    for(let section of sections) {
        const list = document.createElement('li');
        const link = document.createElement('a');//create the links and add all what it needs
        link.setAttribute('href',`#${section.id}`);
        link.classList.add('menu__link');
        link.textContent = section.getAttribute('data-nav');
        list.appendChild(link);
        //first section should appear like this <a href="#section1" class="menu__link">Section 1<a/>
        fragment.appendChild(list);
    }
    ul.appendChild(fragment);
}

// Add Active class on the sections
// when the user scrolls on the page the navbar and the appearing section should be activated
window.addEventListener('scroll',highlight)
function highlight(){
    for (const section of sections) {
        // area is the section that appears on the screen now
        const area = section.getBoundingClientRect().top;
        const HLink = document.querySelector(`[href="#${section.id}"]`)//this code is the link between the section and its value in the navBar
        if(area > -400 && area < 250){
            section.classList.add('your-active-class')//active on the section
            HLink.classList.add('active')//active on its navBar section
        }else{
            section.classList.remove('your-active-class')
            HLink.classList.remove('active')
        }
    }
}

// smooth scrolling
//when the user click on the li in ul will take the action
ul.addEventListener('click', (evt) => {
    //first thing is to display the href link
    evt.preventDefault();
    //and then go the the selectedSection when clicking on it in the navBar link
    const selectedSection = document.getElementById(evt.target.getAttribute('href').substring(1));
    selectedSection.scrollIntoView({
        behavior:"smooth",
        block:"center"
    })
})