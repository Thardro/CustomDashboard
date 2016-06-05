$(document).ready( function() {

	$('.tabs-wrapper').pushpin({
	    top: 62
	});
	
	//$('#field-setup').hide();
	$('#start-point').hide();
	$('#path-planner').hide();
	$('#action-planner').hide();

	$('#alliance-button').click(function() {
		var checked = $('input:radio[name=alliance]:checked').val();
		if(checked == 'red') {
			$('.alliance-picture').attr('src', 'images/red_alliance.png');
		}
		else {
			$('.alliance-picture').attr('src', 'images/blue_alliance.png');
		}
		$('#field-setup').show();
	});
	
	$('#field-button').click(function() {
		$('#start-point').show();
	});
	
	$('#startconfig-button').click(function() {
		$('#path-planner').show();
	});
});

var options = [
    {selector: '#naming', offset: window.innerHeight, callback: function() {
    	$('#page-container').addClass("offset-s2");
    } }
  ];

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
	var output = $(event.target).attr('class');
	if(output.indexOf('img') == -1) {	
		output += "-img";
	}
	$('.'+output).attr("src", document.getElementById(data).src);
	/*
	if(data=="portcullis" || data=="cheval-de-frise") {
		$('#portcullis').hide();
		$('#cheval-de-frise').hide();
	}
	if(data=="moat" || data=="ramparts") {
		$('#moat').hide();
		$('#ramparts').hide();
	}
	if(data=="drawbridge" || data=="sally-port") {
		$('#drawbridge').hide();
		$('#sally-port').hide();
	}
	if(data=="rock-wall" || data=="rough-terrain") {
		$('#rock-wall').hide();
		$('#rough-terrain').hide();
	}
	*/
}