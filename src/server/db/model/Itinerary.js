const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
  //_id: mongoose.Schema.Types.ObjectId,
   city: String,
  country:String,
  iso2:String,
  tagCode:String,
  tagName:String,
  days:Number,
  user:Number,
  priceRange:String,
  title:String,
  cityId:String,
  image: String

});


const Itinerary = mongoose.model("itineraries", itinerarySchema);

module.exports = Itinerary