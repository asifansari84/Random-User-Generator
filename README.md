# Random User Generator

A clean React application that fetches and displays a random user profile from the FreeAPI Random Users API. The app shows profile identity, contact details, address, nationality, date of birth, timezone, and coordinates in a responsive user interface.

## Live Links

- Repository: `Add your GitHub repository link here`
- Demo: `Add your deployed demo link here`

Example:

```md
- Repository: https://github.com/your-username/api-random-user
- Demo: https://api-random-user.vercel.app
```

## Features

- Fetches a random user from a public API
- Loads a new random user with one button click
- Shows loading and error states
- Displays profile image, name, email, age, gender, phone, and location
- Responsive layout for mobile, tablet, and desktop screens
- Built with React, Vite, and modern CSS

## API Used

This project uses the FreeAPI random user endpoint:

```txt
https://api.freeapi.app/api/v1/public/randomusers/user/random
```

The API returns user data such as:

- Name and gender
- Email and login username
- Phone and cell number
- Date of birth
- Address and country
- Profile picture
- Timezone and coordinates

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- FreeAPI public API

## Project Setup

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/api-random-user.git
```

### 2. Go to the project folder

```bash
cd api-random-user
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal. It is usually:

```txt
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates a production-ready build inside the `dist` folder.

```bash
npm run lint
```

Runs ESLint to check code quality.

```bash
npm run preview
```

Previews the production build locally.

## File Structure

```txt
api-random-user/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Important Files

- `src/App.jsx`: Contains the API call, loading state, error handling, and user interface logic.
- `src/App.css`: Contains all component-level styling for the random user profile UI.
- `src/index.css`: Contains global styles and base layout settings.
- `src/main.jsx`: Renders the React app into the DOM.

## How It Works

When the app loads, it sends a `GET` request to the FreeAPI random user endpoint. The returned user data is stored in React state and rendered inside the profile layout.

Clicking the `New User` button calls the API again and updates the interface with a fresh random user.

## Deployment

You can deploy this project on platforms like:

- Vercel
- Netlify
- GitHub Pages

For Vercel or Netlify, use these settings:

```txt
Build command: npm run build
Output directory: dist
```

## Future Improvements

- Add search or filter options
- Add copy-to-clipboard buttons for contact details
- Add dark mode
- Save recently viewed users
- Add skeleton loading cards

## Author

Created by `Your Name`.

## Closing Note

This project is a simple but practical example of working with APIs in React. It covers fetching data, handling UI states, rendering dynamic content, and building a responsive interface.

Keep building, keep experimenting, and make the next version even better.
