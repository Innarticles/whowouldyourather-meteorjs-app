Router.configure({
  layoutTemplate: "masterLayout",
  loadingTemplate: "loading",
  trackPageView: true,
  notFoundTemplate: "notFound",
  routeControllerNameConverter: "camelCase",
  onBeforeAction: function() {
    // Session.set('Marry', null);
    // Session.set('HookUpWith', null);
    // Session.set('Kill', null);
    // $('.btn-next').hide();
    $('#next-post').hide();

 
    // Session.set('cardCount', 0);
    // Session.set('postPosition', 0);
    console.log('I got here');

    if (Config.username && Meteor.userId() && !Meteor.user().username) {
      this.redirect('/setUserName');
    }
    return this.next();
  // }
  // onAfterAction: function() {
    
  }
});

Router.map(function() {

  this.route("home", {
    trackPageView: true,
    path: "/",
    layoutTemplate: "homeLayout"
  });
  this.route("play", {
    path: "/play",
    waitOn: function() {
      return [Meteor.subscribe('posts'), Meteor.subscribe('celebs'), Meteor.subscribe('favorites'), Meteor.subscribe('comments'), Meteor.subscribe('attachments')];
    },
    onBeforeAction: function() {
      var url;
      url = Session.get('redirectToAfterSignIn');
      if (url) {
        Session.set('redirectToAfterSignIn', null);
        Router.go(url);
      }
      // $('.btn-next').hide();

      return this.next();
    },
    data: function() {
      return {
        Posts: Posts.find({}, {
          sort: {
            createdAt: -1
          }
        }).fetch()

      };
    }
  });
  
  // Add Posts Page
  this.route("addPost", {
    path: "/posts/new",
    waitOn: function() {
      return [Meteor.subscribe('celebs'), Meteor.subscribe('attachments'), Meteor.subscribe('posts')];
    },
    data: function(){
        return {                        
            Posts: Posts.find().fetch()
        };
    }  
  });

  // All Celebs Page
  this.route("celebs", {
    path: "/celebs",
    waitOn: function() {
      return [Meteor.subscribe('celebs'), Meteor.subscribe('attachments')];
    },
    data: function(){
        return {                        
            Celebs: Celebs.find().fetch()
        };
    }  
  });


//route to game statistics

  this.route("celebStats", {
    path: "/celebs/trend_status",
    waitOn: function() {
      return [Meteor.subscribe('celebs'), Meteor.subscribe('attachments'), Meteor.subscribe('posts')];
    },
    data: function(){
        return {                        
            Celebs: Celebs.find().fetch()
        };
    }  
  });

  this.route("profile", {
    path: "/profile",
    waitOn: function() {
      return Meteor.subscribe('profilePictures');
    }
  });
  this.route("account", {
    path: "/account",
    onStop: function() {
      return Alert.clear();
    }
  });
  return this.route("setUserName", {
    path: "/setUserName",
    onBeforeAction: function() {
      if (!Config.username || (Meteor.userId() && Meteor.user().username)) {
        this.redirect('/play');
      }
      return this.next();
    }
  });
});

Router.waitOn(function() {
  Meteor.subscribe('user');
  return Meteor.subscribe('userPicture');
});

prepareView = function() {
  var $bd;
  window.scrollTo(0, 0);
  $('body').removeClass('sidebar-active');
  $('.modal-backdrop').removeClass('in');
  $bd = $('.modal-backdrop');
  setTimeout(function() {
    return $bd.remove();
  }, 300);
  return $('body').attr('style', '');
};

Router.onAfterAction(prepareView);

signInRequired = function() {
  AccountsEntry.signInRequired(this);
  if (this.next) {
    return this.next();
  }
};

saveRedirectUrl = function() {
  if (!Meteor.loggingIn()) {
    if (!Meteor.user()) {
      Session.set('redirectToAfterSignIn', this.url);
    }
  }
  return this.next();
};



publicRoutes = _.union(Config.publicRoutes, ['entrySignIn', 'entrySignUp', 'entryForgotPassword', 'celebs', 'addPost', 'celebStats']);


Router.onBeforeAction(saveRedirectUrl, {
  except: _.union(publicRoutes, ['entrySignOut'])
});

Router.onBeforeAction(signInRequired, {
  except: publicRoutes
});

signInProhibited = function() {
  if (Meteor.user()) {
    return Router.go('play');
  } else {
    if (this.next) {
      return this.next();
    }
  }
};

Router.onBeforeAction(signInProhibited, {
  only: ['entrySignUp', 'entrySignUp', 'entryForgotPassword']
});