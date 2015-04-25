(function () {
	var canvas = document.getElementById('unicorn');
	var context = canvas.getContext('2d');

	var background = new Image();
	background.src = "img/unicorn.png";
    
	background.onload = function(){

        for(var i = 0; i < 2; i++){
            var offset = -i*150;
            context.beginPath();
            context.arc(220, 500, 520+offset,Math.PI,0, false)
		    context.closePath();
		    context.lineWidth = 2;
		    context.fillStyle = '#eb3437';
		    context.fill();
            
            
            context.beginPath();
            context.arc(220, 500, 510+offset,Math.PI,0, false)
		    context.closePath();
		    context.lineWidth = 2;
		    context.fillStyle = '#c9bd5c';
		    context.fill();
            
            
            context.beginPath();
            context.arc(220, 500, 500+offset,Math.PI,0, false)
		    context.closePath();
		    context.lineWidth = 2;
		    context.fillStyle = '#6bc554';
		    context.fill();
            
            
            context.beginPath();
            context.arc(220, 500, 490+offset,Math.PI,0, false)
		    context.closePath();
		    context.lineWidth = 2;
		    context.fillStyle = '#2472e4';
		    context.fill();
            
            
            context.beginPath();
            context.arc(220, 500, 480+offset,Math.PI,0, false)
		    context.closePath();
		    context.lineWidth = 2;
		    context.fillStyle = '#aa46cf';
		    context.fill();
            
            context.beginPath();
            context.arc(220, 500, 470+offset,Math.PI,0, false)
		    context.closePath();
		    context.lineWidth = 2;
		    context.fillStyle = '#7EC0EE';
		    context.fill();
        }
            
        //unicorn
	    context.drawImage(background,500,310);   
		context.beginPath();
		// #sadface D:
		context.arc(520, 390, 8, 0, Math.PI, false)
		context.closePath();
		context.lineWidth = 2;
		context.fillStyle = 'pink';
		context.fill();
		context.strokeStyle = '#550000';
		context.stroke();
        
        
	};
})();
