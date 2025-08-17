'use strict'
// ---------------------------
document.addEventListener('click', clickAction)
function clickAction(e){
	const targetElement = e.target
	// Burger menu -------------------------------------------------------------

	if(targetElement.closest('.icon-menu')){
		document.body.classList.toggle('menu-open')
	}
	// else if(targetElement.closest('.menu__link')){
	// 	document.body.classList.remove('menu-open')
	// }
	// Spoller -------------------------------------------------------------------
	if (targetElement.closest('[data-spoller]')) {
		const currentElement = targetElement.closest('[data-spoller]');
		if (!currentElement.nextElementSibling.classList.contains('--sliding')) {
			currentElement.classList.toggle('active');
		}
		slideToggle(currentElement.nextElementSibling);
	}
	// Smooth navigation on link  Работает корректно если хедер незафиксирован-------------------------------------------------------
	// if(targetElement.closest('.menu__link')){
	// 	const scroll = targetElement.dataset.scroll
	// 	const scrollToItem = document.querySelector(scroll)
	// 	if(scrollToItem){
	// 		scrollToItem.scrollIntoView({
	// 			behavior :'smooth'
	// 		})
	// 	}
	// }
	
	// ------------------------------------------------------------------------
}

// Закрытие саб меню в бургере =================================================================================================================
const links = document.querySelectorAll('.menu__item--icon');

links.forEach((link) => {
    link.addEventListener('click', () => {
        link.classList.toggle('sub-open');
    });
});

// SLIDER =======================================================================================
const saySLider = document.querySelector('.say')
if(saySLider){
	new Swiper('.say__slider', {
		// Optional parameters
		loop: true,
		autoHeight: true,
		speed:800,
		parallax: true,
		slidesPerView:2,
		spaceBetween:30,
	 
		// If we need pagination
		pagination: {
		  el: '.say__pagination',
		  clickable: true,
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
			  slidesPerView: 1,
			  spaceBetween: 15
			},
			
			650: {
			  slidesPerView: 2,
			  spaceBetween: 23
			},
		 }
	 });
	
}
// SPOLLER FOOTER ================================================================================
const spollers = document.querySelectorAll('[data-spoller]');
if (spollers.length) {
	spollers.forEach(spoller => {
		spoller.dataset.spoller !== 'open' ? spoller.nextElementSibling.hidden = true : spoller.classList.add('active')
	});
	const filterTitles = document.querySelectorAll('.footer-nav__title')
	filterTitles.forEach(filterTitle =>{
		const breakPointValue = filterTitle.dataset.spollerMedia;
		const breakPoint = breakPointValue ? `(${breakPointValue.split(',')[0]}-width:${breakPointValue.split(',')[1]}px)` : null
		if (breakPoint) {
			const matchMedia = window.matchMedia(breakPoint)
			matchMedia.addEventListener("change", (e) => {
				const isTrue = e.matches
				if (isTrue) {
					slideUp(filterTitle.nextElementSibling)
					filterTitle.classList.remove('active')
				} else {
					slideDown(filterTitle.nextElementSibling)
					filterTitle.classList.add('active')
				}
			})
		}
	})
		
}


let slideDown = (target, duration = 500) => {
	if (!target.classList.contains('--sliding')) {
		target.classList.add('--sliding');
		target.hidden = false;
		let height = target.offsetHeight;

		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;

		target.style.overflow = 'hidden';
		target.style.height = 0;

		target.offsetHeight;

		target.style.transitionProperty = `height, margin, padding`;
		target.style.transitionDuration = `${duration}ms`;

		target.style.height = `${height}px`;

		target.style.removeProperty('padding-top')
		target.style.removeProperty('padding-bottom')
		target.style.removeProperty('margin-bottom')
		target.style.removeProperty('margin-top')

		setTimeout(() => {
			target.style.removeProperty('height')
			target.style.removeProperty('overflow')
			target.style.removeProperty('transition-duration')
			target.style.removeProperty('transition-property')
			target.classList.remove('--sliding');
		}, duration);
	}
}
let slideUp = (target, duration = 500) => {
	if (!target.classList.contains('--sliding')) {
		target.classList.add('--sliding');
		let height = target.offsetHeight;

		target.style.transitionProperty = `height, margin, padding`;
		target.style.transitionDuration = `${duration}ms`;
		target.style.height = `${height}px`;

		target.offsetHeight;

		target.style.overflow = 'hidden';
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;

		target.style.height = 0;

		setTimeout(() => {
			target.style.removeProperty('padding-top')
			target.style.removeProperty('padding-bottom')
			target.style.removeProperty('margin-bottom')
			target.style.removeProperty('margin-top')

			target.style.removeProperty('height')
			target.style.removeProperty('overflow')
			target.style.removeProperty('transition-duration')
			target.style.removeProperty('transition-property')
			target.classList.remove('--sliding');

			target.hidden = true;
		}, duration);
	}
}
let slideToggle = (target, duration = 500) => {
	target.hidden ? slideDown(target, duration) : slideUp(target, duration)
}
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