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
    // var num=num;
    var c = Celebs.findOne({_id: id});
    var n = c.name;
    var mStat = c.nMarry;
    var lStat = c.nLaid;
    var kStat = c.nKill;
    console.log(kStat);

    var addStat = mStat + lStat + kStat;

    // var progressBar = function (div, stat) {
    //               console.log('just got called');
    //               var stepSize = 50;
                  
    //               setTimeout((function () {
    //                   var filler = div;
    //                       percentage = 0;
    //                   return function progress() {
    //                       filler.style.height = percentage + "%";
    //                       percentage += 1;
    //                       if (percentage <= stat) {
    //                           setTimeout(progress, stepSize);
    //                       }
    //                   }
    //               }()), stepSize);
    //             };

    //           switch (num) {
    //             case 1: 
    //               console.log(num,"shitshiiit");
    //               console.log($('.filler1').length)
    //               progressBar($('.filler1')[0], ((mStat/addStat) * 100));
    //               progressBar($('.filler2')[0], ((lStat/addStat) * 100));
    //               progressBar($('.filler3')[0], ((kStat/addStat) * 100));
    //               break;
    //             case 2:
    //               console.log(num,"shithsi");
    //               console.log($('.filler1').length)
    //               progressBar($('.filler1')[1], ((mStat/addStat) * 100));
    //               progressBar($('.filler2')[1], ((lStat/addStat) * 100));
    //               progressBar($('.filler3')[1], ((kStat/addStat) * 100));
    //               break; 
    //             case 3:
    //               console.log(num,"shitshitdoooooom");
    //               console.log($('.filler1').length)
               
    //               progressBar($('.filler1')[2], ((mStat/addStat) * 100));
    //               progressBar($('.filler2')[2], ((lStat/addStat) * 100));
    //               progressBar($('.filler3')[2], ((kStat/addStat) * 100));
    //               break; 
    //             default:
    //                 console.log(num, "shammmmeme");

    //           };   

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

