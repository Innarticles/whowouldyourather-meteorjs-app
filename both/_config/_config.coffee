@Config =
	name: 'Who Would You Rather?'
	title: 'Marry, Fuck or Kill'
	subtitle: 'Nigeria and Ghana Celebrity Edition'
	logo: ->
		'<b>' + @name + '</b>'
	footer: ->
		@name + + 'v1.0' + ' - Copyright ' + new Date().getFullYear()
	emails:
		from: 'noreply@' + Meteor.absoluteUrl()
	username: false
	homeRoute: '/'
	dashboardRoute: '/play'
	socialMedia:
		facebook:
			url: 'http://facebook.com/whowouldyourather'
			icon: 'facebook'
		twitter:
			url: 'http://twitter.com/whowouldyourather'
			icon: 'twitter'
	publicRoutes: ['home', 'play']