"use strict"
import { Counter } from "./Counter.js"

window.onload = () => {
	// Ініціалізація анімованих лічильників
	const counter = new Counter()
	counter.counterInit()
}
// BURGER MENU=======================================================================================================
document.addEventListener('click', clickAction)
function clickAction(event){
	const targetElement = event.target
	if(targetElement.closest(".icon-menu")){
		document.body.classList.toggle('menu-open')
	} else if(targetElement.closest(".menu__link")){
		document.documentElement.classList.remove('menu-open')
	}
	
}

// MOVE ELEMENT ON ADAPTIVE ================================================================================================================
const menu = document.querySelector('.menu')
const elementToMove = document.querySelector('.header__btn')
const moveToBlock = document.querySelector('.icon-menu')

function moveElement(){
	// menu.appendChild(elementToMove) (Как вариант использовать appendChild)
	menu.insertAdjacentElement('beforeend', elementToMove);
}
function returnElement(){
	menu.removeChild(elementToMove)
	moveToBlock.insertAdjacentElement('beforebegin', elementToMove)
}
function handleResize(){
	if(window.innerWidth <= 425){
		moveElement()
	}
	else{
		returnElement()
	}
}
window.addEventListener('resize', handleResize)
// handleResize();


// ANIMATION ON SCROLL ================================================================================
let options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 0.3,
}

let callback = (entries, observer) =>{
	entries.forEach((entry) => {
		const targetElement = entry.target;
		if(entry.isIntersecting){
			targetElement.classList.add('show')
		}
		
	});
}
let observer = new IntersectionObserver(callback, options)

let someElements = document.querySelectorAll('[class*="--anim"]')
someElements.forEach(someElement =>{
	observer.observe(someElement)
})