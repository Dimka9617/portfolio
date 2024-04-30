"use strict"
document.addEventListener('click', docAct)
function docAct(event){

	const targetClick = event.target

	if(targetClick.closest('.menu__link')){
	const scroll = targetClick.dataset.scroll
	const scrollToItem = document.querySelector(scroll)

	if(scrollToItem){
		scrollToItem.scrollIntoView({
			behavior: 'smooth'
		})
	}
}
}







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

