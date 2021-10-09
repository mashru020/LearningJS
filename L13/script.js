'use scrict'

////////////////////////////////////////////
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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
})

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

console.log(document.getElementsByClassName('btn'));*/

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
logo.className = 'mashru';
