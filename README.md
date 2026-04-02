# 🎬 Movie App

A simple React application that allows users to browse movies and save their favorites. The app fetches movie data from The Movie Database (TMDB) API and provides a clean interface for discovering and managing movies.

## Features

- Browse popular movies
- Search for movies by title
- Add and remove movies from favorites
- Persist favorite movies during the session
- Responsive and lightweight UI

## Tech Stack

- React
- Vite
- JavaScript (ES6+)
- TMDB API

## How It Works

The app retrieves movie data from the TMDB API and displays it in a grid layout. Users can search for specific titles or explore popular movies. Each movie card includes an option to add or remove it from a favorites list, which is managed using React state.

## Getting Started

1. Clone the repository
2. Install dependencies

```
npm install
```

3. Create a `.env` file in the project root:

```
VITE_API_KEY=your_tmdb_api_key
```

4. Start the development server

```
npm run dev
```

## Notes

- The API key is required to fetch movie data.
- Favorites are stored locally (not persisted across devices).

## Future Improvements

- Persist favorites using local storage or backend
- Add movie details page
- Improve filtering and sorting options
- Enhance UI/UX and animations
