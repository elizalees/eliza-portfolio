# Dynamic Portfolio Application

This is a dynamic portfolio application built with React and TypeScript. The application showcases various projects and provides information about the portfolio owner.

## Features

- **Home Page**: A landing page that introduces the portfolio.
- **Projects Page**: Displays a list of projects with details and links.
- **About Page**: Provides information about the portfolio owner.
- **Contact Form**: Allows users to submit their contact information.
- **Responsive Design**: The application is designed to be responsive and user-friendly.

## Project Structure

```
dynamic-portfolio
├── src
│   ├── main.tsx          # Entry point of the application
│   ├── App.tsx           # Main App component with routing
│   ├── index.css         # Global CSS styles
│   ├── components        # Reusable components
│   │   ├── Header.tsx    # Navigation and branding
│   │   ├── Footer.tsx    # Copyright and links
│   │   ├── ProjectCard.tsx# Individual project display
│   │   └── ContactForm.tsx# User contact form
│   ├── pages             # Application pages
│   │   ├── Home.tsx      # Landing page
│   │   ├── Projects.tsx   # Projects list
│   │   ├── About.tsx      # About the owner
│   │   └── ProjectDetail.tsx# Detailed project view
│   ├── hooks             # Custom hooks
│   │   └── useFetch.ts   # Data fetching hook
│   ├── services          # API services
│   │   └── api.ts        # API call functions
│   ├── utils             # Utility functions
│   │   └── formatDate.ts  # Date formatting utility
│   ├── types             # TypeScript types
│   │   └── index.ts      # Interfaces and types
│   └── data              # Static data
│       └── projects.json  # Project data
├── public
│   └── index.html        # Main HTML file
├── package.json          # NPM configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
├── .gitignore            # Git ignore file
└── README.md             # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd dynamic-portfolio
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm run dev
```

Open your browser and go to `http://localhost:3000` to view the application.

## License

This project is licensed under the MIT License.