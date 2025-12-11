# Santript Aahar Frontend

Frontend website built with Next.js, React, and Tailwind CSS.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Variables
Create a `.env.local` file:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
NEXT_PUBLIC_S3_BUCKET_DOMAIN=santriptaahar-images.s3.ap-south-1.amazonaws.com
```

### 3. Run Development Server
```bash
npm run dev
```

The website will be available at `http://localhost:3000`

## Project Structure

```
frontend/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   │   ├── home/        # Homepage components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── lib/             # Utilities and API
├── public/               # Static assets
└── package.json
```

## Design System

- **Primary Color**: #39872e
- **Secondary Color**: #5eb242
- **Dark Color**: #2d322c

## Features

- Responsive design (mobile-first)
- Rules of 3 design principles
- SEO optimized
- Fast performance with Next.js

