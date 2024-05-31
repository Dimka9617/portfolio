"use strict"
// ================================================================================
document.addEventListener('click', actionClick)
function actionClick(e){
	const targetElement = e.target
	if(targetElement.closest('.icon-menu')){
		document.body.classList.toggle('menu-open')
	}
	else if(targetElement.closest('.menu__link')){
		document.body.classList.remove('menu-open')
	}
}
// CHANGE-CONTENT ON CLICK (COLOUR)================================================================================
const chooseItem = document.querySelectorAll('.choose__item')
const picture = document.querySelectorAll('.picture')

chooseItem.forEach(function(element){
	element.addEventListener('click', changeAction)
})
function changeAction(e){

const actualTarget = e.currentTarget
const link = actualTarget.dataset.link
const pictureActive = document.querySelectorAll(`.${link}`)

chooseItem.forEach(function(item){
	item.classList.remove('choose__item--active')
})
actualTarget.classList.add('choose__item--active')

picture.forEach(function(item){
	item.classList.remove('picture--active')
})

pictureActive.forEach(function(item){
	item.classList.add('picture--active')
})

}

// CHANGE COLOUR BACKGROUND ON CLICK================================================================================

// Получаем все элементы li
const listItems = document.querySelectorAll('.choose__item');

// Добавляем обработчик события click для каждого элемента
listItems.forEach(item => {
    item.addEventListener('click', () => {
        // Считываем значение атрибута data-link
        const linkValue = item.getAttribute('data-link');

			// Удаляем все классы с body
			//   document.body.classList.remove('linear--green', 'linear--blue', 'linear--white', 'linear--red', 'linear--black')

		document.body.classList.forEach((cls) =>{
			if(cls.startsWith('linear--')){
				document.body.classList.remove(cls)
			}
		})
		  
        // Добавляем класс к body в зависимости от значения атрибута
        if (linkValue) {
            document.body.classList.add(`linear--${linkValue}`);
		  }
    });
});





