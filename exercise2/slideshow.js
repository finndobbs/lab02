var img1 = 'images/g1.jpeg';
var img2 = 'images/g2.png';
var img3 = 'images/g3.jpeg';
var img4 = 'images/g4.jpeg';
var img5 = 'images/g5.png';
	    
var images = [img1, img2, img3, img4, img5];	    
var counter = 0;

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
