
# Job Board Backend

This is the backend for the **Job Board** application. It provides RESTful APIs to manage job listings.

## Deployed URL

**Backend**: [https://job-board-backend-vy6y.onrender.com/](https://job-board-backend-vy6y.onrender.com/)

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

---

## 📦 Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/RaisanJMR/job-board-backend.git
cd job-board-backend

# 2. Install dependencies
npm install

# 3. Create a .env file in root and add the following variables
PORT=8080
NODE_ENV=development
MONGODB_URI=<db uri>
```
## Available API Endpoints


- `GET /job` - Get all jobs with optional search by `title` and `location`
- `GET /job/:id` - Get a single job by ID
- `POST /job` - Create a new job 

## Postman Collection 

[https://documenter.getpostman.com/view/8886902/2sB3B7PEX4](https://documenter.getpostman.com/view/8886902/2sB3B7PEX4) 
