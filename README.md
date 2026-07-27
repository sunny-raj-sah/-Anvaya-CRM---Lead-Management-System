# 🚀 Anvaya CRM - Lead Management System

A modern **CRM (Customer Relationship Management)** application built with the **MERN Stack** to help sales teams manage leads, sales agents, comments, and business reports efficiently.

 Live app: https://anvaya-crm-lead-management-system.vercel.app/
---

# 📌 Project Overview

Anvaya CRM is a Lead Management System where sales teams can:

- Manage sales leads
- Assign leads to sales agents
- Track lead progress
- Add discussion comments
- Filter and search leads
- Analyze sales performance through reports

The project follows a modular architecture with separate frontend and backend applications.

---

# ✨ Features

## Dashboard

- CRM dashboard
- Quick navigation
- Statistics overview (Frontend Ready)

---

## Lead Management

- View all leads
- Create new lead
- Edit existing lead
- Delete lead
- View lead details
- Lead information page
- Assign sales agent
- Lead priority
- Lead source
- Lead status
- Tags support
- Time to close
- Closed date

---

## Lead Filters

Filter leads by:

- Status
- Priority
- Sales Agent
- Source
- Search by Name

Filters are synced with URL query parameters.

Example:

```
/leads?status=Qualified&priority=High
```

---

## Sales Agents

- View agents
- Create new agent
- Assign agents to leads

---

## Comments

Each lead supports discussion.

Features:

- View comments
- Add comment
- Delete comment
- Author information
- Comment timestamps

(Currently uses a temporary logged-in user until Authentication is added.)

---

## Reports (Frontend Ready)

Charts prepared using Chart.js

Includes:

- Pipeline by Status
- Closed Leads Last Week
- Agent Performance

Backend APIs will populate these charts.

---

# 🏗️ Project Structure

```
project
│
├── frontend
│   ├── src
│   │
│   ├── components
│   ├── pages
│   ├── context
│   ├── reducers
│   ├── hooks
│   ├── services
│   ├── constants
│   └── routes
│
├── backend
│   ├── config
│   ├── controllers
│   ├── services
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── seed
│   └── server.js
```

---

# 🧱 Backend Architecture

The backend follows a layered architecture.

```
Routes
    ↓
Controllers
    ↓
Services
    ↓
Models
    ↓
MongoDB
```

This keeps business logic separate from HTTP logic.

---

# 📂 Database Models

## Agent

```
Name
Email
Phone
```

---

## Lead

```
Name
Source
Sales Agent
Status
Priority
Time To Close
Tags
Closed At
```

---

## Comment

```
Lead
Author
Comment Text
Created At
```

---

# 🔍 Filtering

Supported query parameters:

```
search
status
priority
source
salesAgent
```

Example:

```
GET /api/leads?status=Qualified
```

---

# 📊 Reports APIs

Prepared endpoints

```
GET /reports/pipeline
GET /reports/closed-last-week
GET /reports/agent-performance
```

Frontend is already integrated.

---

# 🌱 Database Seeder

Project contains realistic seed data.

Includes

- Multiple Agents
- Large Lead Dataset
- Multiple Comments
- Various Lead Statuses
- Different Priorities
- Different Sources
- Enterprise Tags

Run

```
npm run seed
```

---

# 🛠 Tech Stack

## Frontend

- React
- React Router DOM
- Context API
- useReducer
- Axios
- Bootstrap 5
- Chart.js
- React ChartJS 2
- Vite

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Development Tools

- VS Code
- Postman
- MongoDB Compass
- Git
- GitHub

---

# 📡 REST APIs

## Leads

```
GET     /api/leads
GET     /api/leads/:id
POST    /api/leads
PUT     /api/leads/:id
DELETE  /api/leads/:id
```

---

## Agents

```
GET     /api/agents
POST    /api/agents
```

---

## Comments

```
GET     /api/leads/:leadId/comments
POST    /api/leads/:leadId/comments
DELETE  /api/comments/:id
```

---

## Reports

```
GET /api/reports/pipeline
GET /api/reports/closed-last-week
GET /api/reports/agent-performance
```

---

# 📈 Current Progress

## Frontend

- ✅ Dashboard
- ✅ Leads
- ✅ Agents
- ✅ Reports UI
- ✅ Routing
- ✅ Context API
- ✅ URL Filters
- ✅ CRUD Forms
- ✅ Comments
- ✅ Charts

---

## Backend

- ✅ Express Setup
- ✅ MongoDB
- ✅ Mongoose Models
- ✅ Controllers
- ✅ Services
- ✅ CRUD APIs
- ✅ Filtering
- ✅ Seed Script
- ✅ Comments APIs

---

# 🚧 Planned Improvements

- JWT Authentication
- Login System
- Protected Routes
- Role Based Access
- Pagination
- Debounced Search
- API Response Caching
- Request Validation
- Global Error Handler
- Redis Caching
- Unit Testing
- Integration Testing
- Docker
- Deployment
- CI/CD
- Report Optimization
- Image Uploads
- Activity Logs

---

# 📚 What I Learned

During this project I learned:

- Building a complete MERN application
- REST API design
- MVC Architecture
- Service Layer Architecture
- MongoDB Relationships
- Mongoose Populate
- Context API
- useReducer
- URL Search Parameters
- CRUD Operations
- Reusable Components
- React Hooks
- Backend Folder Structure
- API Integration
- Chart Integration
- Seed Data Creation
- Form Handling
- Error Handling
- State Management
- Backend and Frontend Integration

---

# ▶️ Installation

## Clone Repository

```
git clone <repository-url>
```

---

## Backend

```
cd backend

npm install

npm run dev
```

---

## Frontend

```
cd frontend

npm install

npm run dev
```

---

# 🌐 Environment Variables

Backend

```
PORT=5000

MONGODB_URI=your_connection_string
```

---

# 📷 Screens

- Dashboard
- Leads
- Lead Details
- Add Lead
- Edit Lead
- Agents
- Reports

---

# 🎥 Demo Video

Add your Loom / YouTube video here.

```
Demo Link:
```

---

# 💻 GitHub Repository

```
Frontend :
Backend :
```

---

# 👨‍💻 Author

**Sunny Raj**

Backend Developer | MERN Stack Developer

GitHub:
https://github.com/sunny-raj

LinkedIn:
https://linkedin.com/in/sunny-raj-885588313

---

## ⭐ If you like this project, don't forget to give it a Star!
