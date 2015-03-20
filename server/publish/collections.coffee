Meteor.publish 'posts', ->
	Posts.find()

Meteor.publish 'celebs', ->
	Celebs.find()

Meteor.publish 'attachments', ->
	Attachments.find()