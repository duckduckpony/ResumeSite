

$(document).ready(function() {
	// declare variables
	var email = $('#email');
	var reel = $('#reel');
	var scorebg = $('#scorebg');
	var sbg = $('#soundbg');
	var mbg = $('#musicbg');
	var sound = $('#sound');
	var score = $('#score');
	var music = $('#music');
	var soundball = $('#soundball');
	var scoreball = $('#scoreball');
	var musicball = $('#musicball');
	var fb = $('#fb');
	var sc = $('#soundcloud');
	var bc = $('#bandcamp');
	var twitter = $('#twitter');
	var pillar = $('#pillarsplayer');
	var grow = $('#growplayer');
	var musicitem = $('.musicitem');
	var bison = $('#bisonplayer');

	// score nav functions
	score.mouseenter(function() 
	{
    	scoreball.fadeIn(200);
    });
    
    score.mouseleave(function()
    {
		scoreball.fadeOut(200); 
    });
    
    score.click(function()
    {
	   reel.css("display","none");
	   sbg.css("display","none");
	   scorebg.css("display","none");
	   mbg.css("display","none");
	   scorebg.fadeTo(200,1);
    });
    
    //sound nav functions
    sound.mouseenter(function()
    {
	   	soundball.fadeIn(300); 
    });
    
    sound.mouseleave(function()
    {
	    soundball.fadeOut(300);
    });
    
    sound.click(function()
    {
    	scorebg.css("display","none");
    	mbg.css("display","none");
    	sbg.css("display","none");
    	reel.css("display","block");
	    sbg.fadeTo(200,1);
    });
    
    //music nav functions
    music.mouseenter(function()
    {
	    musicball.fadeIn(200);
    });
    music.mouseleave(function()
    {
	    musicball.fadeOut(200);
    })
    music.click(function()
    {
    	reel.css("display","none");
    	scorebg.css("display","none");
    	sbg.css("display","none");
    	mbg.css("display","none");
    	mbg.css("height","0px");
    	musicitem.css("opacity","0");
    	mbg.fadeTo(200,1);
	    mbg.animate({height: '300px'});
	    musicitem.delay(500).fadeTo(500,1);
    });
    
    //email functions
    email.mouseenter(function()
    {
	    $(this).fadeTo(250,1);
    });
    email.mouseleave(function()
    {
	    $(this).fadeTo(250,0.25);
    });
    
    //bottom bar animations
    fb.mouseenter(function()
    {
		fb.animate({backgroundColor: '#7BF0CA'},200);
	});
	fb.mouseleave(function()
	{
		fb.animate({backgroundColor: '#90DADA'},200)
	})
	
	sc.mouseenter(function()
    {
		sc.animate({backgroundColor: '#7BF0CA'},200);
	});
	sc.mouseleave(function()
	{
		sc.animate({backgroundColor: '#90DADA'},200)
	})
	
	bc.mouseenter(function()
    {
		bc.animate({backgroundColor: '#7BF0CA'},200);
	});
	bc.mouseleave(function()
	{
		bc.animate({backgroundColor: '#90DADA'},200)
	})
	
	twitter.mouseenter(function()
    {
		twitter.animate({backgroundColor: '#7BF0CA'},200);
	});
	twitter.mouseleave(function()
	{
		twitter.animate({backgroundColor: '#90DADA'},200);
	});
	$('#resume').mouseenter(function()
	{
		$('#resume').animate({color: '#000000'},200);
	});
	$('#resume').mouseleave(function()
	{
		$('#resume').animate({color: '#7eb5d6'},200);
	});
	
	//code for switching bc players
	
});