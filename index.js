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
    res.send(`
      <h1>Welcome to the Job Board API</h1>
      <ul>
        <li><a href="https://job-board-backend-vy6y.onrender.com/api/job">GET /api/job</a> - List all jobs (supports ?title= & location=)</li>
        <li><a href="https://job-board-backend-vy6y.onrender.com/api/job/your-job-id">GET /api/job/:id</a> - Get job by ID (replace <code>your-job-id</code>)</li>
      </ul>
      <p><a href="https://documenter.getpostman.com/view/8886902/2sB3B7PEX4" target="_blank">click here</a> to view api documentation in postman</p>
    `);
  });

app.use(errorHandler)
app.listen(PORT, () =>
    console.log(
        `Server Running on Port: http://localhost:${PORT} at ${new Date().toLocaleString(
            'en-US'
        )}`.bgCyan.bold.underline
    )
)