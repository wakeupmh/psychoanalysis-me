
export default (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies
  })
}
