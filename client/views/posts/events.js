Template.posts.rendered = function () {
    // $('.btn-next').hide();
    var check = $(".grey-text").attr("id");
    Session.set("name", check);

    Session.set('Marry',null);
    Session.set('HookUpWith',null);
    Session.set('Kill',null);

    console.log('RENDERED');

    Session.set('activeChoice','Marry');

    Session.set('cardCount', 0);
    // $('.btn-next').hide();
    Session.set('postPosition', 0);
  };


  Template.posts.events({
    'click ': function () {
      console.log("Innocent");
      Session.set('selectedPlayer', 'session value test');

    },
    'click .card': function(e,t){
        //count number of times cards are clicked
        Session.set('cardCount', (Session.get('cardCount') + 1));

        if (!$(e.currentTarget).hasClass('clicked')){
          var _id = $(e.currentTarget).attr('data-celebrity');
          console.log(_id);
          $(e.currentTarget).addClass('clicked');

          if (Session.equals('activeChoice','Marry')){
           $('.aww').trigger('play');
           Session.set('Marry',_id);
           Celebs.update(_id, {$inc: {nMarry: 1}});
           var b = Celebs.findOne(_id);
           console.log(b.nMarry);
           Session.set('activeChoice','HookUpWith');


         } else if (Session.equals('activeChoice','HookUpWith')){
           $('.bells').trigger('play');
           Session.set('HookUpWith',_id);
           Celebs.update(_id, {$inc: {nLaid: 1}});
           Session.set('activeChoice','Kill');


         } else if (Session.equals('activeChoice','Kill')){
           $('.gun').trigger('play');
           $('.fire').trigger('play');
           $('.gun').trigger('play');
           Session.set('Kill',_id);
           Celebs.update(_id, {$inc: {nKill: 1}});
                //Save post

                
                //Go to next post!
              }

              if(Session.get('cardCount') == 3) {
              // $('.btn-next').show();

              progressBar = function (div, stat) {
                console.log('just got called');
                var stepSize = 50;
                setTimeout((function () {
                  var filler = div,
                  percentage = 0;
                  return function progress() {
                    filler.style.height = percentage + "%";
                    percentage += 1;
                    if (percentage <= stat) {
                      setTimeout(progress, stepSize);
                    }
                  }

                }()), stepSize);
              }

              console.log("helloooooo" + $('.filler1')[0] + mStat +"-----");
              console.log("helloooooo" + $('.filler2')[0] + lStat +"-----");
              console.log("helloooooo" + $('.filler3')[0] + kStat +"-----");
              progressBar($('.filler1')[0], ((mStat/addStat) * 100));
              progressBar($('.filler2')[0], ((lStat/addStat) * 100));
              progressBar($('.filler3')[0], ((kStat/addStat) * 100));

              $('#next-post').show();


            }
          }
        },


        'click .btn-next': function(e) {
          Session.set('postPosition', (Session.get('postPosition') + 1));
          Session.set('cardCount', 0);
      // Session.get('activeChoice');
      // return location.reload(true);

    },

    // 'click #share_button': function(e) {
    //   console.log("Im a buton");
    //   FB.ui({
    //     method: 'share',
    //     href: 'http://localhost:3000',
    //   }, function(response){});

    // } 

  });