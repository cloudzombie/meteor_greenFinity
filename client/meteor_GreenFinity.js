Meteor.subscribe("allSensors");


if (Meteor.isClient) {
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

}


// Event Handling


Template.inputForm.events({
  "submit .new-sensor": function (event) {
    // This function is called when the form is submitted
    event.preventDefault()
    var text = event.target.sensor.value;

    Sensors.insert({
      text: text,
      createdAt: new Date() // current time
    });

    // Clear form
    event.target.sensor.value = "";

    // Prevent default form submit
  }
});





// Helpers Handling
/*
  Template.layout.helpers({
    onPage: function (pageName) {
      return Router.current().route.name === pageName;
    }
  });

  Template.list.helpers({
    photos: function () {
      return Photos.find({}, {sort: {"createdAt": -1}});
    }
  });
}
*/

// Pub pushes

