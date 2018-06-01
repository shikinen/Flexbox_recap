document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('navbarHamburger').addEventListener('click', () => {
		const navLinks = document.getElementById('navLinks');
		navLinks.classList.toggle('nav_visible');
	});
});