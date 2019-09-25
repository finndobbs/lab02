let img1 = 'images/g1.jpeg'
let img2 = 'images/g2.png'
let img3 = 'images/g3.jpeg'
let img4 = 'images/g4.jpeg'
let img5 = 'images/g5.png'
	    
let images = [img1, img2, img3, img4, img5]);	    
let counter = 0;

function decrement_counter(){
	if (counter == 0){
		counter = 4;
	}
	else{
		counter -= 1;
	}
}

function increment_counter(){
	if (counter == 4){
		counter = 0;
	}
	else{
		counter += 1;
	}

}

function previous(){
        decrement_counter(); 
	document.getElementById('photo').src = images[counter];
}

function next(){
	increment_counter();
	document.getElementById('photo').src = images[counter];
}
}
