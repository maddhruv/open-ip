import express, { Express } from 'express'
import geoip from 'geoip-lite';
import isIP from 'validator/lib/isIP';

const PORT:number = parseInt(process.env.PORT || '3000', 10)

const app:Express = express()

app.get('/:ip', async (req, res, next) => {
  const ip = req.params.ip
  if (!ip || !isIP(ip)) {
    res
      .status(404)
      .send({
        message: 'Please pass a valid IPv4 address'
      })
  } else {
    const geo = geoip.lookup(req.params.ip)
    res
      .status(200)
      .send(geo)
  }
})

app.listen(PORT, console.log(`👂 Listening on ${PORT}`))