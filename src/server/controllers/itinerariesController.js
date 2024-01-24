const Itinerary = require('../db/model/Itinerary')
//ITINERARY ROUTE HANDLERS



exports.getAllItineraries = async(req, res) => {
  try {
    const itineraries = await Itinerary.find()
    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      results: itineraries.length,
      data: {
        itineraries
      }
    })
  } catch (error) {
    res.status(505).json({
      status: 'error',
      requestedAt: req.requestTime,
      data: {
        error: error.message
      }
    })
  }

}

exports.getItinerary = (req, res) => {
  const itinerary = itineraries.find(el => el.id == (req.params.id * 1))


  res.status(200).json({
    status: 'success',
    results: itineraries.length,
    data: {
     itinerary
    }
  })
}

exports.createItinerary = (req, res) => {
  const id = {id: (itineraries.length)}
  const itinerary = Object.assign(id, req.body)
  itineraries.push(itinerary)

  fs.writeFile('./db/dev-data.json', JSON.stringify(itineraries), err => {
    res.status(201).json({
      data: {
        itinerary
      }
    })
  })
  res.send('Done')

}

exports.updateItinerary = (req, res) => {
  const itinIdx = itineraries.findIndex(el => el.id == (req.params.id * 1))

  if((req.params.id * 1) > itineraries.length) {
    res.status(404).json({
      status: 'fail',
      data: {
        error: 'not available'
      }
    })
  }

  itineraries.splice(tourIdx, 1)

  fs.writeFile('./db/dev-data.json', JSON.stringify(itineraries), err => {
    res.status(201).json({
      data: {
        itinerary: itineraries[itinIdx]
      }
    })
  })


}

exports.deleteItinerary = (req, res) => {
  const itinerary = itineraries.find(el => el.id == (req.params.id * 1))

  if((req.params.id * 1) > itineraries.length) {
    res.status(404).json({
      status: 'fail',
      data: {
        error: 'not available'
      }
    })
  }

  res.status(200).json({
    status: 'success',
    results: itineraries.length,
    data: {
      itinerary
    }
  })
}