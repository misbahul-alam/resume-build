# Resume Builder

A full-stack Resume Builder application with a modern frontend (Next.js) and a robust backend (NestJS). Easily create, customize, and download professional resumes.

## Features

- User-friendly interface for building resumes
- Customizable templates and sections
- Download resumes as PDF
- Responsive design
- RESTful API backend

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** NestJS, TypeScript
- **Database** MongoDB
- **Other:** ESLint, PostCSS

## Project Structure

```
resume-builder/
├── backend/   # NestJS API
└── frontend/  # Next.js app
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Backend Setup (NestJS)

```bash
cd backend
npm install
npm run start:dev
```

The backend will start on [http://localhost:5000](http://localhost:5000).

### Frontend Setup (Next.js)

```bash
cd frontend
npm install
npm run dev
```

The frontend will start on [http://localhost:3000](http://localhost:3000) (or another available port).

## Usage

1. Start both backend and frontend servers as above.
2. Open the frontend URL in your browser.
3. Build your resume, customize sections, and download as PDF.
