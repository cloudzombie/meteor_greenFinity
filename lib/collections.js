Sensors = new Mongo.Collection("sensors");


Sensors.allow({
  insert: function (userId, doc) {
    return true;
  }
})