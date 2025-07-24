const hamburgerMenu = document.querySelector('.hamburger-menu')
const hamburgerLines = hamburgerMenu.querySelectorAll('.line')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuItem = mobileMenu.querySelectorAll('a')
const navItems = document.querySelectorAll('.nav-item a')
const showMoreBtn = document.querySelector('.show-more')
const hiddenProducts = document.querySelector('.products__container-secondary')

const showMobileMenu = params => {
	mobileMenu.classList.add('mobile-menu-active')
	hamburgerLines.forEach(line => {
		line.classList.toggle('menu-line')
		line.classList.toggle('cross-line')

		if (line.classList.contains('menu-line')) {
			mobileMenu.classList.remove('mobile-menu-active')
		}
	})
}

const closeMobileMenu = () => {
	mobileMenu.classList.remove('mobile-menu-active')
	hamburgerLines.forEach(line => {
		line.classList.remove('cross-line')
		line.classList.add('menu-line')
	})
}

const showProducts = () =>{
	if(hiddenProducts.classList.contains('show-active')){
		hiddenProducts.classList.remove('show-active')
		showMoreBtn.innerHTML = 'Pokaż więcej'
	}else{
		hiddenProducts.classList.add('show-active')
		showMoreBtn.innerHTML = "Pokaż mniej"
	}
}

hamburgerMenu.addEventListener('click', showMobileMenu)
mobileMenuItem.forEach(item => item.addEventListener('click', closeMobileMenu))
showMoreBtn.addEventListener('click', showProducts)