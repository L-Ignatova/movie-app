## Movie app to practice ReactJS

Small app to practice ReactJS - components, state management, styling, redux, typescript

### Structure
* main page - loads catalogue of movies from a [Firebase](https://firebase.google.com/) database;
* cart - users can add movies from the catalogue to a cart, calculates sum of order, can also remove movies from cart;
* movie form - form to add movies to the catalogue & the database to;

### Process

Started out with react context api in **main**, then started working on two branches:
* the **[switch-to-redux](https://github.com/L-Ignatova/movie-app/tree/switch-to-redux)** branch goes through the process of switching from Context API to Redux & Redux Toolkit
* the **[switch-to-ts](https://github.com/L-Ignatova/movie-app/tree/switch-to-ts)** branch was made when migrating the app from JavaScript to TypeScript :sparkles:

Both are now merged but can be found in the closed pull requests.

### TBC with:

Unit & integration tests