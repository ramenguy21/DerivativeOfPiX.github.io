$(document).ready(function(){

    $("#flip").click(function(){
        $("#panel").slideDown("slow");
    });

    $("#flip").mouseleave(function(){
    	$("#panel").slideUp(1000);
    });

});