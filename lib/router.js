Router.configure({
  layoutTemplate: 'layout'
});

Router.route('', function () {
  this.render('Home', {
    waitOn: function(){
   //   return Meteor.subscribe("allSensors");
    },
    data: function(){
      return {
        datum: function(){
          return Sensors.find({});
        }
      }
    }
  }); // end Home route

}); // end Router


Router.route('about', function () {
  this.render('About');
});


/*

Router.configure({
  layoutTemplate: "layout"
});

*/