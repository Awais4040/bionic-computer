# Bionic Computer - Professional IT Solutions Website

A modern, professional, and fully responsive website for Bionic Computer, a leading IT and hardware solutions provider in Karachi, Pakistan.

## Features

✨ **Modern Design**
- Clean, professional UI with gradient accents
- Responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Modern color scheme (Primary: #0052CC, Secondary: #FF6B35)

📱 **Responsive Sections**
- Hero section with CTA buttons
- Services showcase (6 core services)
- About company with stats
- Client testimonials
- FAQ accordion
- Contact form with validation
- Sticky header with navigation

🎯 **Key Components**
- Header with mobile-friendly navigation
- Form validation and error handling
- Social media integration
- 24/7 contact information
- SEO-friendly structure

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Notifications**: React Hot Toast
- **Containerization**: Docker

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Docker (optional)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd bionic-website
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Docker Deployment

### Build Docker Image
```bash
docker build -t bionic-computer:latest .
```

### Run with Docker Compose
```bash
docker compose up -d
```

### Run Container
```bash
docker run -p 3000:3000 bionic-computer:latest
```

## Build for Production

```bash
npm run build
npm start
```

## File Structure

```
├── src/
│   ├── app/
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   └── globals.css
│   └── components/
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── Services.jsx
│       ├── About.jsx
│       ├── Testimonials.jsx
│       ├── FAQ.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
├── Dockerfile
├── docker-compose.yml
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#0052CC',
  secondary: '#FF6B35',
  dark: '#1A1A1A',
  light: '#F5F5F5',
}
```

### Content
Update component files in `src/components/` for:
- Services list
- Testimonials
- FAQ questions
- Contact information

## Contact Information

- **Phone**: +92 311 1444299
- **Email**: contact@bioniccomputer.com.pk
- **Location**: Karachi, Pakistan

## License

All rights reserved © 2025 Bionic Computer
