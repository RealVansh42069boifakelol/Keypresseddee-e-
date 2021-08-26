canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

imgwidth = 300;
imgheight = 100;

var img_image;

imgx = 100;
imgy = 100;

function add() {
	imgimgTag = new Image(); //defining a variable with a new image
	imgimgTag.onload = uploadimg; // setting a function, onloading this variable
	imgimgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(imgimgTag, imgx, imgy, imgwidth, imgheight);
}

//Write a code to grab the key-pressed event

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			alphabetkey();
			document.getElementById("d1").innerHTML = "You pressed " + keyPressed + "which is a ALPHABETICAL key!";
		}
	     else if(keyPressed >= 47 && keyPressed <= 57){
				numberkey();
				document.getElementById("d1").innerHTML = "You pressed "+ keyPressed + " which is a NUMBER key@";
		}
		else if(keyPressed >= 37 && keyPressed <= 40){
			arrowkey();
			document.getElementById("d1").innerHTML = "You pressed "+ keyPressed + "which is a ARROW key!";
			
		}
		else if(keyPressed <= 17 && keyPressed >= 27){
			specialkey();
			document.getElementById("d1").innerHTML = "You pressed "+ keyPressed + "whicj is a SPECIAL key!";
		}
		else{
			otherkey();
			document.getElementById("d1").innerHTML = "You pressed "+ keyPressed + "which is a OTHER key!";
		}
}

function alphabetkey()
{
	igmimage = "Alpkey.png";
	add();
}
function numberkey()
{
	imgimage = "numkey.png";
	add();
}
function arrowkey()
{
	imgimage = "Arrkey.png";
	add();
}
function specialkey()
{
	imgimage = "spkey.png";
}
function otherkey()
{
	imgimage="otherkey.png";
	add();
}
	
