// Template.registerHelper('getImg',function(picture){
//     return Images.findOne({'_id': picture}).url();
// });


// // Template.postEach.helpers({
// //   oneRandomPost: function () {
// //     var count = Posts.find().fetch().length;
// //      randomBtw = Math.floor((Math.random() * count) + 1);;
// //     return Posts.find().fetch()[1];
    
// //   }
// // });

// Template.registerHelper('oneRandomPost',function(){
//     var count = Posts.find().fetch().length;
//      randomBtw = Math.floor((Math.random() * count) + 1);
//     return Posts.find().fetch()[1];
// });

// Template.registerHelper('getCelebName',function(id){
//     console.log(id);
//      n = Products.findOne({_id: id});
//      console.log(n);
//      m = n.name;
//     return m;
// })

// Template.registerHelper('getCelebPic',function(id){
//      a = Products.findOne({_id: id});
//      b = a.picture;
//     return Images.findOne({_id: b}).url();
// })


// Template.registerHelper('getRating',function(){
    
//     return 5;
// })


// Template.registerHelper('celeb1s', function() {

//     a = Products.find().fetch();
//     var returnArray = new Array();
//     for (i = 0; i < a.length; i++){
//       returnArray[i] = { label: a[i].name, value: a[i]._id };
//     }
//     console.log(returnArray);
//     return returnArray;
// });



// Template.registerHelper('celeb2s', function() {
    
//     a = Products.find().fetch();
//     var returnArray = new Array();
//     for (i = 0; i < a.length; i++){
//       returnArray[i] = { 'label': a[i].name, value: a[i].name };
//   }

//     return returnArray;
// });

// Template.registerHelper('celeb3s', function() {
//     a = Products.find().fetch();
//     var returnArray = new Array();
//     for (i = 0; i < a.length; i++){
//       returnArray[i] = { 'label': a[i].name, value: a[i].name };
//   }

//     return returnArray;
// });
