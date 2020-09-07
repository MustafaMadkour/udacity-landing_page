/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// nav-bar UL
const navBar = document.getElementById('navbar__list');

// all Sections 
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navBuilder = () => {
    let nav = '';

    // loop over all sections
    for (section of sections) {
        const secID = section.id;
        const secData = section.dataset.nav;
        
        nav += `<li><a class="menu__link" href="#${secID}">${secData}</a></li>`;
    };

    // adding all elements created to the nav-bar ul 
    navBar.innerHTML = nav;
};

navBuilder();

// Add class 'active' to section when near top of viewport

// largest value leess or equal to the number
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove active class
const removeActive = (section) => {
    section.classList.remove('your-active-class');
};

// add active class
const addActive = (cond, section) => {
    cond ? section.classList.add('your-active-class') : null;
};

// Active Section
const activeSection = () => {
    for (section of sections) {
        const secOffset = offset(section);

        inView = () => (secOffset < 150 && secOffset >= -150);

        removeActive(section);
        addActive(inView(), section);
    };
};

window.addEventListener('scroll', activeSection());

// Scroll to anchor ID using scrollTO event
const scrolling = () => {
    const links = document.querySelectorAll('.navbar__menu a');
    for (link of links) {
        link.addEventListener('click', () => {
            for (section in sections) {
                section.addEventListener('scroll', sectionScroll(link));
            };
        });
    };
};

scrolling();
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active