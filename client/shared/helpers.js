//Custom helpers

Template.registerHelper('celebOptions', function() {

    a = Celebs.find().fetch();
    var returnArray = new Array();
    for (i = 0; i < a.length; i++){
      returnArray[i] = { label: a[i].name, value: a[i]._id };
    }
    console.log(returnArray);
    return returnArray;
});

Template.registerHelper('getCelebName',function(id){
    var n = Celebs.findOne(id);
    return n.name;
});


Template.registerHelper('getCelebPic',function(id){
    var c = Celebs.findOne({_id: id});
    p = c.picture;
    return Attachments.findOne({_id: p}).url();
});

count = 0;
Template.registerHelper('oneRandomPost', function () {
  // $('.btn-next').hide();
  $('#next-post').hide();

    Session.set('activeChoice', 'Marry');  
  $('.card').each(function () {
        $(this).removeClass('clicked');
        console.log("in card")
      });
  var postLength = Posts.find().count();
  var postLength =  postLength -1;
  
  var testPosition = Session.get('postPosition');

  if(testPosition > postLength){
    console.log("gameStats reached")
      Router.go("gameStats");

  }
  else{
    return Posts.find().fetch()[Session.get('postPosition')];
  }
  });
Template.header.events({
  'click .von': function () {
    $('.main').trigger('play');
    $('.von').addClass('animated pulse')
    $('.von').removeClass('animated pulse')
  },
  'click .voff': function () {
    $('.main').trigger('pause');
    $('.voff').addClass('animated pulse')
    $('.voff').removeClass('animated pulse')
  }
  
});
