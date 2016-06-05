$(document).ready( function() {
	$('select').material_select();

	$('.toc-wrapper').pushpin({
	    top: 160
	});

	$('.scrollspy').scrollSpy();

	var LEFTPOS = document.getElementById("left-position");
        Plotly.plot( LEFTPOS, [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16] }], {
        margin: { t: 0 } }, 
        {displayModeBar: false});

    var LEFTVEL = document.getElementById("left-velocity");
        Plotly.plot( LEFTVEL, [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16] }], {
        margin: { t: 0 } }, 
        {displayModeBar: false});

    var RIGHTPOS = document.getElementById("right-position");
        Plotly.plot( RIGHTPOS, [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16] }], {
        margin: { t: 0 } }, 
        {displayModeBar: false});

    var RIGHTVEL = document.getElementById("right-velocity");
        Plotly.plot( RIGHTVEL, [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16] }], {
        margin: { t: 0 } }, 
        {displayModeBar: false});

    var HEADINGPOS = document.getElementById("heading-position");
        Plotly.plot( HEADINGPOS, [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16] }], {
        margin: { t: 0 } }, 
        {displayModeBar: false});

    var HEADINGVEL = document.getElementById("heading-velocity");
        Plotly.plot( HEADINGVEL, [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16] }], {
        margin: { t: 0 } }, 
        {displayModeBar: false});

    var LEFTSHOOTPOS = document.getElementById("left-shoot-position");
        Plotly.plot( LEFTSHOOTPOS, [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16] }], {
        margin: { t: 0 } }, 
        {displayModeBar: false});

    var LEFTSHOOTVEL = document.getElementById("left-shoot-velocity");
        Plotly.plot( LEFTSHOOTVEL, [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16] }], {
        margin: { t: 0 } }, 
        {displayModeBar: false});

    var RIGHTSHOOTPOS = document.getElementById("right-shoot-position");
        Plotly.plot( RIGHTSHOOTPOS, [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16] }], {
        margin: { t: 0 } }, 
        {displayModeBar: false});

    var RIGHTSHOOTVEL = document.getElementById("right-shoot-velocity");
        Plotly.plot( RIGHTSHOOTVEL, [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16] }], {
        margin: { t: 0 } }, 
        {displayModeBar: false});
});