var express = require('express');
var router = express.Router();
var models = require('../models');
var Place = models.Place;
var Hotel = models.Hotel;
var Activity = models.Activity;
var Restaurant = models.Restaurant;
module.exports = router;

router.get('/', function (req, res, next) {
  Hotel.find({}).exec().then(function (hotels) {
    Restaurant.find({}).exec().then(function (restaurants) {
      Activity.find({}).exec().then(function (activities) {
        res.render('index', {
          all_hotels: hotels,
          all_restaurants: restaurants,
          all_activities: activities
        });
      }).then(null, console.log);
    }).then(null, console.log);
  }).then(null, console.log);
});