// celebs.js
Celebs = new Meteor.Collection('celebs');
var Schemas = {};

Schemas.Celebs = new SimpleSchema({
    name: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'text'
      }
    },
    label: 'Celeb Name'
  },
    picture: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Attachments'
      }
    },
    label: 'Choose file'
  },
  nMarry: {
    type: Number,
    autoform: {
      omit: true
    }
  },
   nLaid: {
    type: Number,
    autoform: {
      omit: true
    }
  },
   nKill: {
    type: Number,
    autoform: {
      omit: true
    }
  },
    owner: {
      type: String,
      regEx: SimpleSchema.RegEx.Id,
      autoValue: function() {
        if (this.isInsert) {
          return Meteor.userId();
        }
      },
      autoform: {
        options: function() {
          return _.map(Meteor.users.find().fetch(), function(user) {
            return {
              label: user.emails[0].address,
              value: user._id
            };
          });
        }
      }
    }
});

Celebs.attachSchema(Schemas.Celebs);

// Celebs.allow({
//   insert: function(userId, doc) {
//     return true;
//   },
//   update: function (userId, doc, fields, modifier) {
//         // can only change your own documents
//         return doc.owner === userId;
//       },
//   remove: function (userId, doc) {
//         // can only remove your own documents
//         return doc.owner === userId;
//       },
//   fetch: ['owner']
// });
