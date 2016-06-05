//jQuery.noConflict();
// Use jQuery via jQuery() instead of via $()
$(document).ready(function(){
	$('select').material_select();
	$('.tabs-wrapper .row').pushpin({ top: '20px' });

    $("#driverCamera").on('error', function() {
        $("#driverCamera").hide();
        $(".driverCameraLoading").show();
        $('#cameraFound').text("Camera not found");
        console.log("Camera not found");
    });
    $("#driverCamera").on('load', function() {
        $(".driverCameraLoading").hide();
        $("#driverCamera").show();
        $('#cameraFound').text("Camera found");
    });
	var currentValue = $('#currentValue');

	$('#snoutAngle').change(function(){
	    $(".snout").css("transform", "rotate(-"+this.value+"deg)");

	});

	// Trigger the event on load, so
	// the value field is populated:

	$('#snoutAngle').change();
});
