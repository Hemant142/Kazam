# kazam_assignment

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Deployed Links](#deployed-links)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

**kazam_assignment** is a real-time Notes App where users can add and view notes instantly.  
The application uses **WebSocket** (Socket.IO) for live updates, **Redis** as a caching layer, and **MongoDB** for permanent storage when note limits are exceeded.  
It includes a fully responsive frontend built with **React** and **Tailwind CSS**.

## Features

- **Real-Time Updates**: Add new notes instantly via WebSocket
- **Task Caching**: Store tasks temporarily in Redis
- **MongoDB Storage**: Move tasks to MongoDB if task count exceeds 50
- **HTTP API**: Fetch all tasks through a simple REST endpoint
- **Responsive Frontend**: Mobile and tablet friendly UI
- **Reusable Components**: Clean, reusable UI and service structure

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, TypeScript, Axios, Socket.IO Client
- **Backend**: Node.js, Express.js, TypeScript, Socket.IO Server, dotenv etc.
- **Database**: Redis (for caching), MongoDB Atlas (for storage)
- **Deployment**: Render.com (Backend), Vercel (Frontend)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/Hemant142/Kazam
   ```

2. **Navigate to the project directory**

   ```bash
   cd kazamfrontend
   ```

3. **Install backend dependencies**

   ```bash
   cd kazamBackend
   npm install
   ```

4. **Install frontend dependencies**

   ```bash
   cd ../kazamfrontend
   npm install
   ```

5. **Set up environment variables**  
   Create a `.env` file inside the `backend` folder:

   ```plaintext
   PORT=3000
   REDIS_HOST=your_redis_host
   REDIS_PORT=your_redis_port
   REDIS_USERNAME=default
   REDIS_PASSWORD=your_redis_password
   MONGO_URL=your_mongo_db_url
   REDIS_KEY=FULLSTACK_TASK_HEMANT
   ```

6. **Run the backend server**

   ```bash
   cd kazamBackend
   npm run server
   ```

7. **Run the frontend application**
   ```bash
   cd ../fronkazamfrontendtend
   npm run dev
   ```

## Usage

Once the application is running:

- Frontend: Navigate to `http://localhost:5173` (or Vite default port)
- Backend: Runs on `http://localhost:8080`
- You can add new notes using the input field. Notes are stored in Redis first and moved to MongoDB automatically after 50 entries.

## Deployed Links

- **Frontend**: [Frontend Deployment Link](https://kazam-gamma.vercel.app/)
- **Backend**: [Backend Deployment Link](https://kazam-api.onrender.com)

## Screenshots

Homepage
[![laptop.png](https://i.postimg.cc/qMk89fS0/laptop.png)](https://postimg.cc/dDxkyfJS)
Mobile Responsive View
[![mobile.png](https://i.postimg.cc/FHNnWngJ/mobile.png)](https://postimg.cc/LnQThDWH)

## Contributing

Contributions are welcome!  
Please feel free to open an issue or submit a pull request if you have suggestions for improvements.

## License

This project is licensed under the **MIT License**.
