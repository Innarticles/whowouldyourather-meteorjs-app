@Config =
	name: 'Who Would You Rather?'
	title: 'Marry, HookUpWith or Kill'
	subtitle: 'Nigeria and Ghana Celebrity Edition'
	logo: ->
		'<b>' + @name + '</b>'
	footer: ->
		@name + 'v1.0' + ' - Copyright ' + new Date().getFullYear()
	emails:
		from: 'noreply@' + Meteor.absoluteUrl()
	username: false
	homeRoute: '/'
	dashboardRoute: '/play'
	socialMedia:
		facebook:
			url: 'http://facebook.com/whowouldyouratherapp'
			icon: 'facebook'
		twitter:
			url: 'http://twitter.com/whowudyourather'
			icon: 'twitter'
	publicRoutes: ['home', 'play']
