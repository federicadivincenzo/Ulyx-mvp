const express = require('express')
const itinerariesController = require(`${__dirname}/../controllers/itinerariesController`)

const router = express.Router()


router.route('/')
  .get(itinerariesController.getAllItineraries)
  .post(itinerariesController.createItinerary)

  router.route('/:id')
  .get(itinerariesController.getItinerary)
  .patch(itinerariesController.updateItinerary)
  .delete(itinerariesController.deleteItinerary)


module.exports = router