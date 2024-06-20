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
let SubHeaderText = document.querySelector('#txt02');
let StarredSky = document.querySelector('#img02');
let DoubleMoon = document.querySelector('#img04');
let FloatingPedestals = document.querySelector('#img10');
let FloatingFragments = document.querySelector('#img12');
let FloatingPedestalsLightEffect = document.querySelector('#img11');

window.addEventListener('scroll',()=>{
	const isMobile = window.innerWidth;
  	if (isMobile >= 1024)
  	{
		let Value = window.scrollY;
		HeaderText.style.marginTop = Value * 1.5 + 'px';
		SubHeaderText.style.marginTop = Value * 1.5 + 'px';
		StarredSky.style.marginLeft = Value * 0.5 + 'px';
		DoubleMoon.style.marginTop = Value * 0.75 + 'px';
		FloatingPedestals.style.marginTop = Value * -0.25 + 'px';
		FloatingFragments.style.marginTop = Value * -0.75 + 'px';
		FloatingPedestalsLightEffect.style.marginTop = Value * -0.25 + 'px';
	}
});


let ScrollButton = document.querySelector('#btn01');
let isScrolling;

window.addEventListener('scroll', () => {
	window.clearTimeout(isScrolling);
	isScrolling = setTimeout(() => {
	    if (window.scrollY > document.documentElement.scrollHeight/2)
	    {
	        ScrollButton.classList.add('rotate');
	    }
	    else 
	    {
	        ScrollButton.classList.remove('rotate');
	    }
	}, 200);
});

ScrollButton.addEventListener('click', () => {
    if (window.scrollY > document.documentElement.scrollHeight/2)
    {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    else
    {
    	window.scrollTo({top: document.documentElement.scrollHeight, behavior: 'smooth'});
    }
});