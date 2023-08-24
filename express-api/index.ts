// const xpress = require('express')
import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {

  res.status(200).json({ok: 'Hello World!'})

  res.status(401).json({error: 'Error'})

  res.json({ok: 'Hello World!'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})