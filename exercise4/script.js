function setBorder(){
	let border = document.getElementById('paragraph')
	let red = document.getElementById('bor_red').value;
	let green = document.getElementById('bor_green').value;
	let blue = document.getElementById('bor_blue').value;
	let width = document.getElementById('bor_width').value;

	border.style.borderColor = 'rgb('+red+', '+green+', '+blue+')';
	border.style.borderWidth = width+'px';
}

function setBack(){
	let back = document.getElementById('paragraph')
	let red = document.getElementById('back_red').value;
	let green = document.getElementById('back_green').value;
	let blue = document.getElementById('back_blue').value;

	back.style.backgroundColor = 'rgb('+red+', '+green+', '+blue+')';
}
