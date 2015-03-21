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
              $('#next-post').show();

            }
        }
    },
   

    'click .btn-next': function(e) {
      Session.set('postPosition', (Session.get('postPosition') + 1));
      Session.set('cardCount', 0);
      // Session.get('activeChoice');
      // return location.reload(true);

    } 

});