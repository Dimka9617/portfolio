"use strict"

// ================================================================================
import { Counter } from "./Counter.js"

window.onload = () => {
	// Ініціалізація анімованих лічильників
	const counter = new Counter()
	counter.counterInit()
}
// ================================================================================

window.addEventListener('load', loaded)
function loaded(e){
	document.documentElement.classList.add('loaded')
	// ------------------LISTENER CLICK----------------------------
	document.addEventListener('click', clickAction)
	function clickAction(e){
		const targetElement = e.target
		// ----------
		if(targetElement.closest('.icon-menu')){
			document.documentElement.classList.toggle('menu-open')
		}
		if(targetElement.closest('.menu__link')){
			document.documentElement.classList.remove('menu-open')
		}
		// -----------
		if (targetElement.closest('[data-spoller]')) {
			const currentElement = targetElement.closest('[data-spoller]');
			if (!currentElement.nextElementSibling.classList.contains('--sliding')) {
				currentElement.classList.toggle('active');
			}
			slideToggle(currentElement.nextElementSibling);
		}
		// -----------
		
	}
	
	// HEADER SCROLL-----------LISTENER SCROLL--------------------------
	let lastScrollY = window.scrollY
	document.addEventListener('scroll', () => {
		const currentScrollY = window.scrollY
		const headerElement = document.querySelector('.header')
		const IsMenuOpen = document.documentElement.classList.contains('menu-open')
		if(headerElement && !IsMenuOpen){
			if(currentScrollY > lastScrollY &&  currentScrollY >=50){
			headerElement.classList.add('header--scroll')
		} else if (currentScrollY === 0){
			headerElement.classList.remove('header--scroll')
		}
		}
	})
} 
// SPOLLER FOOTER ================================================================================
// const spollers = document.querySelectorAll('[data-spoller]');
// if (spollers.length) {
// 	spollers.forEach(spoller => {
// 		spoller.dataset.spoller !== 'open' ? spoller.nextElementSibling.hidden = true : spoller.classList.add('active')
// 	});
// 	const filterTitles = document.querySelectorAll('.main-footer__title')
// 	filterTitles.forEach(filterTitle =>{
// 		const breakPointValue = filterTitle.dataset.spollerMedia;
// 		const breakPoint = breakPointValue ? `(${breakPointValue.split(',')[0]}-width:${breakPointValue.split(',')[1]}px)` : null
// 		if (breakPoint) {
// 			const matchMedia = window.matchMedia(breakPoint)
// 			matchMedia.addEventListener("change", (e) => {
// 				const isTrue = e.matches
// 				if (isTrue) {
// 					slideUp(filterTitle.nextElementSibling)
// 					filterTitle.classList.remove('active')
// 				} else {
// 					slideDown(filterTitle.nextElementSibling)
// 					filterTitle.classList.add('active')
// 				}
// 			})
// 		}
// 	})
		
// }


// let slideDown = (target, duration = 400) => {
// 	if (!target.classList.contains('--sliding')) {
// 		target.classList.add('--sliding');
// 		target.hidden = false;
// 		let height = target.offsetHeight;

// 		target.style.paddingTop = 0;
// 		target.style.paddingBottom = 0;
// 		target.style.marginTop = 0;
// 		target.style.marginBottom = 0;

// 		target.style.overflow = 'hidden';
// 		target.style.height = 0;

// 		target.offsetHeight;

// 		target.style.transitionProperty = `height, margin, padding`;
// 		target.style.transitionDuration = `${duration}ms`;

// 		target.style.height = `${height}px`;

// 		target.style.removeProperty('padding-top')
// 		target.style.removeProperty('padding-bottom')
// 		target.style.removeProperty('margin-bottom')
// 		target.style.removeProperty('margin-top')

// 		setTimeout(() => {
// 			target.style.removeProperty('height')
// 			target.style.removeProperty('overflow')
// 			target.style.removeProperty('transition-duration')
// 			target.style.removeProperty('transition-property')
// 			target.classList.remove('--sliding');
// 		}, duration);
// 	}
// }
// let slideUp = (target, duration = 400) => {
// 	if (!target.classList.contains('--sliding')) {
// 		target.classList.add('--sliding');
// 		let height = target.offsetHeight;

// 		target.style.transitionProperty = `height, margin, padding`;
// 		target.style.transitionDuration = `${duration}ms`;
// 		target.style.height = `${height}px`;

// 		target.offsetHeight;

// 		target.style.overflow = 'hidden';
// 		target.style.paddingTop = 0;
// 		target.style.paddingBottom = 0;
// 		target.style.marginTop = 0;
// 		target.style.marginBottom = 0;

// 		target.style.height = 0;

// 		setTimeout(() => {
// 			target.style.removeProperty('padding-top')
// 			target.style.removeProperty('padding-bottom')
// 			target.style.removeProperty('margin-bottom')
// 			target.style.removeProperty('margin-top')

// 			target.style.removeProperty('height')
// 			target.style.removeProperty('overflow')
// 			target.style.removeProperty('transition-duration')
// 			target.style.removeProperty('transition-property')
// 			target.classList.remove('--sliding');

// 			target.hidden = true;
// 		}, duration);
// 	}
// }
// let slideToggle = (target, duration = 400) => {
// 	target.hidden ? slideDown(target, duration) : slideUp(target, duration)
// }
// АЛЬТЕРНАТИВА СКАЧКАМ =====================================================================
const slideDown = (target, duration = 400) => {
	if (!target.classList.contains('--sliding')) {
		target.classList.add('--sliding');

		target.style.overflow = 'hidden';
		target.style.height = '0px';

		const height = target.scrollHeight;

		target.style.transition = `height ${duration}ms ease`;

		requestAnimationFrame(() => {
			target.style.height = `${height}px`;
		});

		setTimeout(() => {
			// НЕ сбрасываем height!
			target.classList.remove('--sliding');
		}, duration);
	}
};

const slideUp = (target, duration = 400) => {
	if (!target.classList.contains('--sliding')) {
		target.classList.add('--sliding');

		const height = target.scrollHeight;
		target.style.height = `${height}px`;
		target.style.overflow = 'hidden';
		target.style.transition = `height ${duration}ms ease`;

		requestAnimationFrame(() => {
			target.style.height = '0px';
		});

		setTimeout(() => {
			// Скрываем только визуально, не убираем из потока
			target.classList.remove('--sliding');
		}, duration);
	}
};

const slideToggle = (target, duration = 400) => {
	const currentHeight = parseFloat(window.getComputedStyle(target).height);
	currentHeight > 0 ? slideUp(target, duration) : slideDown(target, duration);
};

// ANIMATION CONTENT ON SCROLL============================================================================================
let options ={
	root: null,
	rootMargin : "0px 0px 0px 0px",
	treshold : 0.3,
}

let animation = (entries, observer) =>{
	entries.forEach(entry =>{
		const targetEl = entry.target
		if(entry.isIntersecting){
			targetEl.classList.add('show')
		}
	})
}

let observer = new IntersectionObserver(animation, options)

let someElements = document.querySelectorAll('[class*="--anim"]')
someElements.forEach(someElement =>{
	observer.observe(someElement)
})
// =======================================================================================================






