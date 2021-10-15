'use scrict'

////////////////////////////////////////////
// Modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// nav
const nav = document.querySelector('.nav');

// scroll
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// Tabbed Component 
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


// modal window
const openModal = function(e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escap' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// ///////////////////////////////////////
// Scrolling

btnScrollTo.addEventListener('click', function() {
    section1.scrollIntoView({behavior: 'smooth'})
});

///////////////////////////////////////////
// Page Navigation 
// not a clean solution -> have to use event delegation
// document.querySelectorAll('.nav__link').forEach( function(el) {
//     el.addEventListener('click', function(e) {
//         e.preventDefault();
//         const id = this.getAttribute('href');
//         document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//     });
// });


// Event Delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function(e) {
    // console.log(e.target);

    // Matching strategy
    if(e.target.classList.contains('nav__link')) {
        e.preventDefault();
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
});


///////////////////////////////////////////
// Tabbed operation

//tabs.forEach( t => t.addEventListener('click', () => console.log('TAB')));

tabsContainer.addEventListener('click',function(e) {
    const clicked = e.target.closest('.operations__tab');
    // console.log(clicked);

    // Guard Clause
    if(!clicked) return;

    // remove active classes
    tabs.forEach( t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));

    // Active Tab
    clicked.classList.add('operations__tab--active');

    // Active content area
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});


///////////////////////////////////////////
// Menu fade animation

const handelHover = function(e) {
    if(e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');
        siblings.forEach(el => {
            if(el !== link) el.style.opacity = this;
        })
        logo.style.opacity = this;
    }
}
// nav.addEventListener('mouseover', e => handelHover(e,0.5));
// nav.addEventListener('mouseout', e => handelHover(e,1));

// passing "agrument" into handler
nav.addEventListener('mouseover', handelHover.bind(0.5));
nav.addEventListener('mouseout', handelHover.bind(1));


///////////////////////////////////////////

// Sticky navigation

/*const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);
window.addEventListener('scroll',function() {
    console.log(window.scrollY);
    if(window.scrollY > initialCoords.top) nav.classList.add('sticky');
    else nav.classList.remove('sticky');

});*/


// Sticky Navigation: Intersection Observer API

// const obsCallback = function(entries , observer) {
//     entries.forEach( entry => {
//         //console.log(entry);
//     });
//     console.log(entries);
// }

// const obsOptions = {
//     root: null,
//     threshold: [0, 0.2],
// }

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
//console.log(navHeight);

const stickyNav = function(entries) {
    const [entry] = entries;
    //console.log(entry);
    if(!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav, {
    root:null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// 181. Selectiong, Creating and Deleting Elements
/*console.log(document.documentElement);
console.log(document.head);
console.log(document.body);


const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('#section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements 
//.insetAdjacentHTML

const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = 'We use cookied for inproved functionality and analytics';
message.innerHTML = 'We use cookied for inproved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); //add as a first child 
header.append(message); // add as a last child

// header.append(message.cloneNode(true)); // if we want two 

// header.before(message);
// header.after(message);

// Delete elements 
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
    //message.remove();
    message.parentElement.removeChild(message);
});


// 182. Style, Attributes and Class
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);
console.log(message.style.backgroundColor);
console.log(message.style.color);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =Number.parseFloat( getComputedStyle(message).height, 10) + 20 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);

console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';


// non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));

logo.setAttribute('company', 'Bankist');
console.log(logo.src); // absolute
console.log(logo.getAttribute('src')); //relative

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));


const link1 = document.querySelector('.nav__link--btn');
console.log(link1.href);
console.log(link1.getAttribute('href'));

// Data Attribute
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); //not includes

// don't use
logo.className = 'mashru';*/ 

// 183. Implementing Smooth Scrooling
//const btnScrollTo = document.querySelector('.btn--scroll-to');
/*const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e) {
    const s1coords = section1.getBoundingClientRect();
    //console.log(s1coords);

    //console.log(e.target.getBoundingClientRect());

    //console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

    //console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

    // Scrolling
    //window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

    // =================  old school style  ==============
    // window.scrollTo ({
    //     left: s1coords.left + window.pageXOffset, 
    //     top: s1coords.top + window.pageYOffset, 
    //     behavior: 'smooth',
    // });

    // ================  modern style ================ (support in only moddrn browser) 
    section1.scrollIntoView({behavior: 'smooth'});

});*/

/*// 184. Types of Events and Event Handlers

const h1 = document.querySelector('h1');

const alertH1 = function(e) {
    alert('addEventListener: Great! You are reading the hading 😁');

    // way 3
    h1.removeEventListener('mouseenter', alertH1);
}
// way 1
h1.addEventListener('mouseenter', alertH1 );

// way 2
// h1.onmouseenter = function(e) {
//     alert('addEventListener: Great! You are reading the hading 😁😁');
// };

// way 4
//setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// way 5 in html*/

// 185. Event Propagation, Bubblinga and capturing
/*// 186. Event Propagation Practice
// rgb(255,255,255)
const randomInt = (min, max) =>  Math.floor(Math.random() * ( max - min + 1 ) + min );
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)},${randomInt(0, 255)})`;
//console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function(e) {
    this.style.backgroundColor = randomColor();
    console.log('LiNK', e.target, e.currentTarget);
    console.log(e.currentTarget === this);

    // Stop propagation
    //e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function(e) {
    this.style.backgroundColor = randomColor();
    console.log('CONTAINER', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener(
    'click', 
    function(e) {
        this.style.backgroundColor = randomColor();
        console.log('NAV', e.target, e.currentTarget);
    },
    true
);*/

// 187. Event Delegation Implementing Page Navigation
// ---------------------- in the top ----------------------

/*// 188. Dom Traversing

const h1 = document.querySelector('h1');

// Going downward: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function(el) {
    if(el !== h1) {
        el.style.transform = 'scale(0.5)';
    }
});*/
// ---------------------- in the app section ----------------------
// 189.Building Tabbed component
// 190. Passing argument to event handler
// 191. Implementing a Sticky navigation the scroll event
// 192. A Better Way The Intersection Observer API
// ---------------------- in the app section ----------------------