"use strict"
// NAVIGATION ON MENU-LINK ================================================================================
// document.addEventListener('click', docAct)
// function docAct(event){

// 	const targetClick = event.target

// 	if(targetClick.closest('.menu__link')){
// 	const scroll = targetClick.dataset.scroll
// 	const scrollToItem = document.querySelector(scroll)

// 	if(scrollToItem){
// 		scrollToItem.scrollIntoView({
// 			behavior: 'smooth'
// 		})
// 	}
// }
// }
// ANIMATION ON VIEWPORT======================================================================================

// function handleResize() {
	
// 	if (window.innerWidth < 768) {
// 		 const options = {
// 			  root: null,
// 			  rootMargin: "0px 0px 0px 0px",
// 			  threshold: 0.3,
// 		 };

// 		 const callBack = (entries, observer) => {
// 			  entries.forEach((entry) => {
// 					const targetElement = entry.target;
// 					if (entry.isIntersecting) {
// 						 targetElement.classList.add("move-left");
// 					} else {
// 						 targetElement.classList.remove("move-left");
// 					}
// 			  });
// 		 };

// 		 const observer = new IntersectionObserver(callBack, options);
// 		 const target = document.querySelector(".brands__row-left");
// 		 observer.observe(target);
// 	}
	
// }
// window.addEventListener("resize", handleResize);

// ------------------------------------------------------
// function handleResizeR() {
// 	if(window.innerWidth < 768){
// 		const options = {
// 			root: null,
// 			rootMargin: "0px 0px 0px 0px",
// 			threshold: 0.3,
// 	  };

// 	  const callBackR = (entries, observer) => {
// 			entries.forEach((entry) => {
// 				 const targetElement = entry.target;
// 				 if (entry.isIntersecting) {
// 					  targetElement.classList.add("move-right");
// 				 } else {
// 					  targetElement.classList.remove("move-right");
// 				 }
// 			});
// 	  };

// 	  const observer = new IntersectionObserver(callBackR, options);
// 	  const target = document.querySelector(".brands__row-right");
// 	  observer.observe(target);
// 	}
// }

// window.addEventListener("resize", handleResizeR);


// SWIPER ================================================================================
const customerSlider = document.querySelector('.customer__slider')
if(customerSlider){

 new Swiper('.customer__slider', {
	// Optional parameters
	autoHeight: true,
	speed:800,
	parallax: true,
	loop: true,
 
	// If we need pagination
	pagination: {
	  el: '.customer__pagination',
	  clickable: true,
	},
 
 });
}
// BURGER================================================================================
document.addEventListener('click', documentAction)
function documentAction(e){
	const targetElement = e.target
	if(targetElement.closest(".icon-menu")){
		document.documentElement.classList.toggle('menu-open')
	}
	else if(targetElement.closest('.menu__link')){
		document.documentElement.classList.remove('menu-open')
	}
}