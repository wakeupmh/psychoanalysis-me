import { getPersonalityInside } from '../personality/analyser'
import Bluebird from 'bluebird'

export default (req, res) => {
  Bluebird.resolve(getPersonalityInside(req.body.text))
  .then(analyses => res.json({
    personality: analyses
  }))
  
}
