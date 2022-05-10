const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()

const { vv } = require('./utils/chars')
const rootRouter = require('./routes')
const PORT = 3030 || process.env.PORT
dotenv.config()

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', rootRouter)

app.listen(PORT, () => {
  console.clear()
  console.log(`\n${vv}\nServer listening on port\n${PORT}\n${vv}`)
})
