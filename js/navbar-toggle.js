document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('navbarHamburger').addEventListener('click', () => {
		const navLinks = document.getElementById('navLinks');
		console.log('działam!');
		navLinks.className = (navLinks.className === 'navbar__links') ? 'navbar__links nav_visible' : 'navbar__links';

	});
});