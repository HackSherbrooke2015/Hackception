(function () {
	var canvas = document.getElementById('unicorn');
	var context = canvas.getContext('2d');

	var background = new Image();
	background.src = "img/unicorn.png";

	background.onload = function(){
		//unicorn
	    context.drawImage(background,500,310);   
		context.beginPath();
		// #sadface D:
		context.arc(520, 393, 8, 0, Math.PI, false);
		context.closePath();
		context.lineWidth = 2;
		context.fillStyle = 'pink';
		context.fill();
		context.strokeStyle = '#550000';
		context.stroke();
		
		
	};
})();