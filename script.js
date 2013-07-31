$(document).ready(function() {	

	// loads all sound design info on page load so user doesn't need to click anywhere at first
	$(document).ready(function()
	{
		sound.animate({color: '#644436'},300);
	    sbg.fadeTo(200,1);
	    reelplayer.css("display","block");
	    bottominfo.css("height","0px");
	    bottominfo.css("display","block");
	    bottominfo.animate({backgroundColor: '#8f6048'},50);
	    bottominfo.animate({height:'70px'},300);
	    soundinfo.delay(300).fadeTo(300,1);
	    soundOn = true;
	});
	// declare variables
	var email = $('#email');
	
	// backgrounds and stuff
	var reel = $('#reel');
	var scorebg = $('#scorebg');
	var sbg = $('#soundbg');
	var mbg = $('#musicbg');
	var bottominfo = $('#bottominfo');
	
	// nav items
	var sound = $('#sound');
	var score = $('#score');
	var music = $('#music');
	
	// nav balls
	var soundball = $('#soundball');
	var scoreball = $('#scoreball');
	var musicball = $('#musicball');
	
	var fs = $('#fs');
	var sc = $('#soundcloud');
	var bc = $('#bandcamp');
	var twitter = $('#twitter');
	
	// music section
	var musicitem = $('.musicitem');
	var musicinfo = $('.musicinfo');
	var pillar = $('#pillarsplayer');
	var grow = $('#growplayer');
	var bison = $('#bisonplayer');
	
	// score section
	var scoreitem = $('.scoreitem');
	var scoreinfo = $('.scoreinfo');
	var para = $('#paraplayer');
	var brave = $('#braveplayer');
	var drill = $('#drillplayer');
	
	var soundinfo = $('#soundinfo');
	var reelplayer = $('#reelplayer');
	var soundtest = $('#sound')[0];

	// bools to determine which section is clicked
	var soundOn = false;
	var musicOn = false;
	var scoresOn = false;

	function displayReset()
	{
		soundinfo.css("display","none");
		musicitem.css("display","none");
		soundinfo.css("opacity","0");
		scoreinfo.css("opacity","0");
		musicinfo.css("opacity","0");
		reelplayer.css("display","none");
		scorebg.css("display","none");
		sbg.css("display","none");
		mbg.css("display","none");
		bottominfo.css("display","none");
		bottominfo.css("height","0px");
	    bottominfo.css("display","block");
	};

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
    	if (scoresOn===false)
    	{
	    	sound.animate({color: '#ffffff'},100);
	    	music.animate({color: '#ffffff'},100);
	    	displayReset();
	    	scorebg.css("height","0px");
	    	score.animate({color: '#644436'},300);
	    	scoreitem.css("opacity","0");
	    	scorebg.fadeTo(200,1);
	    	scorebg.animate({height:'300px'});
	    	scoreitem.delay(500).fadeTo(500,1);
	    	bottominfo.delay(200).animate({backgroundColor: '#8f6048'},500);
	    	bottominfo.animate({height:'126px'},300);
	    	scoreinfo.delay(800).fadeTo(300,1);
	    	scoresOn = true;
	    	soundOn = false;
	    	musicOn = false;
    	};
	   
    });
    
    scoreitem.click(function(event) {
        alert(event.target.id);
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
    	if (soundOn===false)
    	{
	    	music.animate({color: '#ffffff'},100);
	    	score.animate({color: '#ffffff'},100);
	    	displayReset();
	    	sound.animate({color: '#644436'},300);
	    	sbg.fadeTo(200,1);
	    	reelplayer.css("display","block");
	    	bottominfo.animate({backgroundColor: '#8f6048'},50);
	    	bottominfo.animate({height:'70px'},300);
	    	soundinfo.delay(300).fadeTo(300,1);
	    	soundOn = true;
	    	musicOn = false;
	    	scoresOn = false;
    	};
    	
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
    	if (musicOn===false)
    	{
	    	score.animate({color: '#ffffff'},100);
	    	sound.animate({color: '#ffffff'},100);
	    	scoreinfo.css("display","none");
	    	displayReset();
	    	mbg.css("height","0px");
	    	music.animate({color: '#644436'},300);
	    	musicitem.css("opacity","0");
	    	mbg.fadeTo(200,1);
	    	mbg.animate({height: '300px'});
	    	musicitem.delay(500).fadeTo(500,1);
	    	bottominfo.delay(200).animate({backgroundColor: '#8f6048'},500);
	    	bottominfo.animate({height:'126px'},300);
	    	musicinfo.delay(800).fadeTo(300,1);
	    	musicOn = true;
	    	scoresOn = false;
	    	soundOn = false;
    	};
	    
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
    fs.mouseenter(function()
    {
		fs.animate({backgroundColor: '#7BF0CA'},200);
	});
	fs.mouseleave(function()
	{
		fs.animate({backgroundColor: '#90DADA'},200)
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
	
});