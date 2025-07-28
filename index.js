const dotenv = require('dotenv').config()
const express = require('express')
const colors = require('colors')
const cors = require('cors');
const { errorHandler } = require('./middleware/errorHandler')
const connectDB = require('./config/db')
const jobRouter = require('./routes/jobRoutes')

connectDB()

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 8080
app.use(cors());

app.use('/api/job', jobRouter)


app.get('/', (req, res) => {
    res.send('api is running...')
})

app.use(errorHandler)
app.listen(PORT, () =>
    console.log(
        `Server Running on Port: http://localhost:${PORT} at ${new Date().toLocaleString(
            'en-US'
        )}`.bgCyan.bold.underline
    )
)