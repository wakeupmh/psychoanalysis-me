import { getPersonalityInside } from '../personality'
export default (req, res) => {
  const myPersonality = getPersonalityInside(req.body.text)
  res.json({
    myPersonality
  })
}
