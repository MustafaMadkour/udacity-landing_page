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


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active