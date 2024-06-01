const OpenBurgerMenu = document.querySelector('nav');
const NavigationMenu = document.querySelector('ul');
const NoScrollOnBody = document.querySelector('body');
OpenBurgerMenu.onclick = function()
{
	OpenBurgerMenu.classList.toggle('active');
	NavigationMenu.classList.toggle('active');
	NoScrollOnBody.classList.toggle('no-scroll');
}

let HeaderText = document.querySelector('#txt01');
let StarredSky = document.querySelector('#img02');
let DoubleMoon = document.querySelector('#img04');
let FloatingPedestals = document.querySelector('#img09');
let FloatingFragments = document.querySelector('#img10');

window.addEventListener('scroll',()=>{
	const isMobile = window.innerWidth;
  	if (isMobile >= 1024)
  	{
		let Value = window.scrollY;
		HeaderText.style.marginTop = Value * 1.5 + 'px';
		StarredSky.style.marginLeft = Value * 0.5 + 'px';
		DoubleMoon.style.marginTop = Value * 0.75 + 'px';
		FloatingPedestals.style.marginTop = Value * -0.25 + 'px';
		FloatingFragments.style.marginTop = Value * -0.75 + 'px';
	}
});