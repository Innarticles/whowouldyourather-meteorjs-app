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

Template.registerHelper('getCelebStats',function(id){
    c = Celebs.findOne({_id: id});
    n = c.name;
    mStat = c.nMarry;
    lStat = c.nLaid;
    kStat = c.nKill;
    console.log(kStat);

    addStat = mStat + lStat + kStat;

    // $('.progress').find('.progress-bar-success').css('width', ((mStat/addStat)*100) +'%')
    // $('.progress').find('.progress-bar-warning').css('width', ((lStat/addStat)*100) +'%')
    // $('.progress').find('.progress-bar-danger').css('width',((kStat/addStat)*100) +'%')

    return {
      name : n,
      marry : mStat,
      hookup : lStat,
      kill : kStat
    }

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
    console.log("celebStats reached")
      Router.go("celebStats");

  }
  else{
    return Posts.find().fetch()[Session.get('postPosition')];
  }
  });


Template.masterLayout.rendered = function () {
  window.fbAsyncInit = function() {
       FB.init({
         appId      : '783334228451511',
         xfbml      : true,
         version    : 'v2.2'
       });
     };
};

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

