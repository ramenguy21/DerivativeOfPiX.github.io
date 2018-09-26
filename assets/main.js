$(document).ready(function() {

  //on load apply these effects
  //VVVVVVVVVVVVVVVVVVVVVVVVVV
  $("#dynamic-img").css("border-radius", "100px").css("transition", "3s");
  $(".fade-in").fadeIn(1000);
  $(".underline").css("width", "600px").css("transition", "2.5s").delay(2000);

  $("#dynamic-img").mouseover(function() {
    	$("#dynamic-img").css("border-radius", "200px").css("transition", "1s");
    	console.log('animated' + this.name);
  	})

  $("#dynamic-img").mouseout(function() {
    	$("#dynamic-img").css("border-radius", "100px");
  	})

  $(".social-med > .nav-item").mouseover(function(){
		$(this).css("font-size", "30px").css("transition", "0.5s");
	})

  $(".social-med > .nav-item").mouseout(function(){
		$(this).css("font-size", "20px").css("transition", "1s");
	})

  $(".header").mouseover(function(){
    $(".underline").css("width", "550px").css("transition", "0.7s")
  })

  $(".header").mouseout(function(){
    $(".underline").css("width", "600px").css("transition", "1s")
  })

  $("#disc-butt").click(function(){
    $("#discord").slideDown();
  })

  $("#disc-butt").mouseout(function(){
    $("#discord").delay(1000).slideUp();
  })
})

function myFunction(x) {
    x.classList.toggle("change");
    $(".side-bar").slideToggle("slow");
}

