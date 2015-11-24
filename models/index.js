var mongoose = require('mongoose');
var marked = require('marked');
mongoose.connect('mongodb://localhost/trip_planner');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error: '));

var placeSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        validate: {
            validator: function(v) {
               return /\d{3}\-\d{3}\-\d{4}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        }
    },
    location:     {
        type: [Number],
    }
});

var hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    place: [placeSchema],
    num_stars: {
        type: Number,
        min: 1,
        max: 5
    },
    amenities: {
        type: String,
    },
});

var activitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    place: [placeSchema],
    age_range: {
        type: String,
        default: "All"
    }
});

var restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    place: [placeSchema],
    cuisine: {
        type: String,
    },
    price: {
        type: Number,
        min: 1,
        max: 5
    },
});


var Place = mongoose.model('Place', placeSchema);
var Hotel = mongoose.model('Hotel', hotelSchema);
var Activity = mongoose.model('Activity', activitySchema);
var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = {
    Place: Place,
    Hotel: Hotel,
    Activity: Activity,
    Restaurant: Restaurant
};
















