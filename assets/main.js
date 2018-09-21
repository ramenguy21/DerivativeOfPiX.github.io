$(document).ready(function() {

  $("#dynamic-img").mouseover(function() {
    	$("#dynamic-img").css("border-radius", "200px").css("transition", "1s");
    	console.log('animated' + this.name);
  	})

  $("#dynamic-img").mouseout(function() {
    	$("#dynamic-img").css("border-radius", "100px");
  	})

  $(".nav-item").mouseover(function(){
		$(this).css("font-size", "30px").css("transition", "0.5s");
		console.log('animated' + this.name);
	})

  $(".nav-item").mouseout(function(){
		$(this).css("font-size", "20px").css("transition", "1s");
		console.log('animated' + this.name);
	})
})

