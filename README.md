# Jenish Chauhan Portfolio

This project is a recruiter-friendly portfolio website built with React, Tailwind CSS, Vite, and Node.js. It presents Jenish Chauhan's cloud, DevOps, certifications, projects, education, and contact details in a polished single-page layout.

## Tech Stack

- React
- Tailwind CSS
- Vite
- Node.js

## Run Locally

1. Install dependencies.

```bash
npm install
```

2. Start the development server.

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

3. Build for production.

```bash
npm run build
```

The optimized output will be created in the `dist` folder.

4. Preview the production build.

```bash
npm run preview
```

## Project Structure

```text
PortFolioWebsite/
  public/
  src/
    App.jsx
    index.css
    main.jsx
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  vite.config.js
```

## Notes

- Recommended Node.js version: 20+.
- The portfolio uses the resume content as the source for skills, projects, certifications, and education.
- The resume PDF is available directly inside the website through the `public` folder.
- If PowerShell blocks `npm`, use `npm.cmd run dev`, `npm.cmd run build`, or `npm.cmd run preview`.
