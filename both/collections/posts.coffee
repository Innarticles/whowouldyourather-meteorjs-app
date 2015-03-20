@Posts = new Meteor.Collection('posts');

Schemas.Posts = new SimpleSchema
	title:
		type:String
		max: 60

	celeb1s:
	    type: String
	    autoform: options: [ {
	      label: 'test'
	      value: 'test'
	    } ]

	celeb2s:
	    type: String
	    autoform: options: [ {
	      label: 'test'
	      value: 'test'
	    } ]

	celeb3s:
	    type: String
	    autoform: options: [ {
	      label: 'test'
	      value: 'test'
	    } ]

	createdAt: 
		type: Date
		autoValue: ->
			if this.isInsert
				new Date()

	updatedAt:
		type:Date
		optional:true
		autoValue: ->
			if this.isUpdate
				new Date()

	owner: 
		type: String
		regEx: SimpleSchema.RegEx.Id
		autoValue: ->
			if this.isInsert
				Meteor.userId()
		autoform:
			options: ->
				_.map Meteor.users.find().fetch(), (user)->
					label: user.emails[0].address
					value: user._id

Posts.attachSchema(Schemas.Posts)