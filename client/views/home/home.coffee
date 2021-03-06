Template.home.rendered = () ->
	w = new WOW().init()

	# make sure div stays full width/height on resize
	# global vars
	winWidth = $(window).width()
	winHeight = $(window).height()

	# set initial div height / width
	$("#intro").css
	  width: winWidth
	  height: winHeight

	$(window).resize ->
	  $("#intro").css
	    width: $(window).width()
	    height: $(window).height()

	
	# s = new skrollr.init({smoothScrolling: true})
	# s.refresh()

	if  (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent or navigator.vendor or window.opera)
		$('#intro').addClass('mobile')
	else
		options =
			forceHeight: false
			smoothScrolling: false

		skrollr.init(options).refresh()


	$( document ).ready ->
		# alert 'ready'
		$('#loading-overlay').fadeOut 800


Template.home.events 'click .playRules': (e, t) ->
   e.preventDefault()
   $('.main').trigger 'pause'
   $('.swoosh').trigger 'play'
   $('.main').trigger 'play';
   $('.imgboard').attr 'src', 'img/22.jpg'
 return
 
 Template.home.events 'click .playGame': (e, t) ->
   e.preventDefault()
   $('.main').trigger 'pause'
   $('.swoosh').trigger 'play'
   $('.main').trigger 'play';
   Router.go 'entrySignUp'
 return