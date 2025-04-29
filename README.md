# Project Name

A full-stack application with React frontend and Node.js backend.

## Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)
- [Other dependencies if any]

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/akgec-saurabh/task-tracker.git
cd task-tracker
```

### 2. Install dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
npm install
```

### 3. Environment Variables

Create `.env` files in both frontend and backend directories:

#### Frontend `.env`

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

#### Backend `.env`

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/yourdb
JWT_SECRET=your_jwt_secret
CORS_ORIGIN=http://localhost:3000
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_EXPIRY=7d
```

### 4. Running the Application

#### Start the Backend

```bash
cd backend
npm start
```

#### Start the Frontend (in a new terminal)

```bash
cd frontend
npm start
```

## Project Structure

```
project-root/
│
├── backend/               # Backend code
│   ├── controllers/       # Route controllers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── .env               # Environment variables
│   └── src/index.js        # Main server file
│
├── frontend/              # Frontend code
│   ├── public/            # Static files
│   ├── app/               # App Routes
│   ├── components/        # Reusable components
│   ├── utils/             # Utility functions
│   ├── .env               # Environment variables
│   └── package.json       # Frontend dependencies
│
└── README.md              # This file
```

## Available Scripts

### Frontend

- `npm run dev` - Start development server

### Backend

- `npm run dev` - Start in development mode with nodemon
