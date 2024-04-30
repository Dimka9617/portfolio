"use strict"
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