require('dotenv').config()
const { getPersonalityInside } = require('../personality/analyser')
const Bluebird = require('bluebird')

module.exports = (req, res) => {
  Bluebird.resolve(getPersonalityInside(req.body.text))
  .then(analyses => res.json({
    personality: analyses
  }))
  
}
