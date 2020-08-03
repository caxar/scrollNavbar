const date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();

const topLink = document.querySelector('.top-link'),
	  navbar = document.querySelector('nav');


window.addEventListener('scroll', () => {
	const navHeight = navbar.getBoundingClientRect().height;
	const scrollHeight = window.pageYOffset;

	if(scrollHeight > navHeight) {
		navbar.classList.add('fixed-nav');
	} else {
		navbar.classList.remove('fixed-nav');
	}

	if(scrollHeight > 500) {
		topLink.classList.add('show-link');
	} else {
		topLink.classList.remove('show-link');
	}
});