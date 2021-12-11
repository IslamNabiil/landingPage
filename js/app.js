// Global variables
const sections = document.querySelectorAll('section')
const ul = document.querySelector('ul')

// Build the navBar
window.addEventListener('DOMContentLoaded', BuildNav )
function BuildNav() {
    // first createDocumentFragment for the performance
    const fragment = document.createDocumentFragment();
    for(let section of sections) {
        const list = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = section.getAttribute('data-nav');
        link.classList.add('menu__link');
        link.setAttribute('href',`#${section.id}`);
        list.appendChild(link);
        fragment.appendChild(list);
    }
    ul.appendChild(fragment);
}

