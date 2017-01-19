$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('#planet').css({
		'transform' : 'translate(0px, -'+ wScroll /1 +'%)'
	});
	$('#planet1').css({
		'transform' : 'translate(0px, -'+ wScroll /3 +'%)'
	});
	
	if(wScroll > $('#logos').offset().top - $(window).height()){

    $('#logos skillImages').css({'background-position':'center '+ (wScroll - $('#logos').offset().top) +'px'});

    var opacity = (wScroll - $('#logos').offset().top + 400) / (wScroll / 5);

    $('#logos').css({'opacity': opacity});

  }

  if(wScroll > $('#logos').offset().top - $(window).height()){

    var offset = Math.min(0, wScroll - $('#logos').offset().top +$(window).height() - 350);

    $('#html1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.8) +'px)'});

    $('#css1').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.4) +'px)'});

    $('#boot1').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.8) +'px)'});

  }

});