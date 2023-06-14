$(document).ready(function (){

    // reveal details and image on hover
    $(".if-img").hover( function(){
        $(this).prev().children(".reveal-answer").css("display", "block");
        $(this).children("img").css("filter", "none");
    });

    // refreshes page when 'reset' button is clicked
    $("#metamorphosis-reset").on("click", function(){
        location.reload(true);
    });

    // displays video when 'Display Video' button is clicked
    $("#video-button").click(function(){
		$(".video").toggleClass("displayInline");
	});
    
});