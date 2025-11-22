A simple and clean React + TypeScript application that allows users to browse recipes, explore categories, search meals, view detailed recipe information, and save favorite recipes.
All data is fetched from TheMealDB, a free public API.

The project showcases:

React Router for page navigation

Context API for global favorites management

Custom hooks (useFetch, useLocalStorage)

Tailwind CSS for basic styling

Fully client-side SPA

# Getting Started
1. Install Dependencies
npm install

2. Run the Development Server
npm run dev

3. Open in browser

Vite will show a local URL (usually http://localhost:5173/).

# Features
✔ Browse categories

Home page lists all recipe categories.

✔ View meals in a category

Clicking a category shows recipes inside that category.

✔ Detailed recipe page

Displays ingredients, instructions, and an option to favorite/unfavorite.

✔ Save favorites

Favorites are stored globally using Context + saved in localStorage.

✔ Search recipes

Search bar in the Navbar allows searching by meal name.

✔ Favorites page

A dedicated page that lists all user-saved recipes.

✔ Responsive UI with Tailwind

Simple but clean layout with Tailwind CSS.

# Reflection

1. Most challenging part

The most challenging part of this project was organizing the API flow and making sure different pages reused the same fetching logic. Creating a reusable custom hook (useFetch) helped structure this in a clean way.

2. Design decision

A key design decision was using Context API + useLocalStorage to manage favorite recipes.
Instead of prop-drilling through multiple components, the context gives global access to favorites, while useLocalStorage ensures favorites persist across refreshes.
This kept the codebase simple and prevented unnecessary state duplication.
