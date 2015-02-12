 Meteor.publish("allSensors", function () {
    return Sensors.find({});
});

