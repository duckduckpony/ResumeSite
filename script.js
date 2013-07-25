

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
	var scoreitem = $('.scoreitem');
	var bison = $('#bisonplayer');
	var reelplayer = $('#reelplayer');

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
	   sound.animate({color: '#ffffff'},100);
	   music.animate({color: '#ffffff'},100);
	   sbg.css("display","none");
	   reelplayer.css("display","none");
	   scorebg.css("display","none");
	   sbg.css("display","none");
	   mbg.css("display","none");
	   musicitem.css("display","none");
	   scorebg.css("height","0px");
	   score.animate({color: '#644436'},300);
	   scoreitem.css("opacity","0");
	   scorebg.fadeTo(200,1);
	   scorebg.animate({height:'300px'});
	   scoreitem.delay(500).fadeTo(500,1);
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
    	music.animate({color: '#ffffff'},100);
    	score.animate({color: '#ffffff'},100);
    	scorebg.css("display","none");
    	mbg.css("display","none");
    	sbg.css("display","none");
    	sbg.css("height","0px");
    	sound.animate({color: '#644436'},300);
    	reelplayer.css("opacity","0");
	    sbg.fadeTo(200,1);
	    sbg.animate({height:'356px'});
	    reelplayer.delay(500).fadeTo(1000,1);
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
    	score.animate({color: '#ffffff'},100);
    	sound.animate({color: '#ffffff'},100);
    	scorebg.css("display","none");
    	reelplayer.css("display","none");
    	sbg.css("display","none");
    	mbg.css("display","none");
    	mbg.css("height","0px");
    	music.animate({color: '#644436'},300);
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