let text = document.getElementById('text');
let right1 = document.getElementById('right1');
let left1 = document.getElementById('left1');
let right2 = document.getElementById('right2');
let left2 = document.getElementById('left2');

window.addEventListener('scroll', () => {
	let value = window.scrollY;
	
	text.style.marginTop = value * 1.0 + 'px';
	right1.style.left = value * -1.5 + 'px';
	left1.style.left = value * 1.5 + 'px';
	right2.style.left = value * 2.5 + 'px';
	left2.style.left = value * -2.5 + 'px';
});