# React Gallery App

An image gallery with search features using `create-react-app`.
Created using the `fetch API` and `React Router` with the `Flickr API`.

## Video

[<img width="400px" src="https://i3.ytimg.com/vi/ek6f5yW5B2o/maxresdefault.jpg" />](https://youtu.be/ek6f5yW5B2o "React Image Library Video Link")

## Table of Contents

[Loading the Project](#viewing-the-project)

[Client Requirements](#client-requirements)

[Extra Features](#extra-features)

[Notes from the Build](#notes-from-the-build)

## Viewing the Project

- To run the project you will need to first download the files to your local directory.
- Move into the directory and install the npm modules with `npm install`
- I recommend using Node version 12 (also recommend using nvm to change version)
- Before starting the server, you will first need to get a Flickr API key of your own. You can get this at [Flickr API](https://www.flickr.com/services/api/misc.api_keys.html).
- The `config.js` file should look something like this:

   ```
   const apiKey = 'YOUR API KEY';
   export default apiKey;
   ```
   
- With the API key now referenced in the `/src` directory as `config.js` you can run the project in developer mode with `npm run start`.

## Client Requirements

1. One React Application

2. Build your app components

   - Use the mockups as a general guide while you create the components of this project.
   - Components to use:
     - A `Photo` component that displays the `li` and `img` elements.
     - A `Nav` component for the apps navigation links.
     - A `NotFound` component for displaying a user-friendly message when the search returns no results.

3. Navigation
   
   - The URL should display the correct route
   - Forward and back buttons should also work
   - Clicking a nav link should navigate the user to the correct route, displaying the appropriate info.

4. Search

   - Include a "Search" link that includes a search field to let users search for photos.
   - Your app should display at least 3 default topic links that return a list of photos matching some criteria.

5. Displaying the data

   - There should be no console warnings.
   - The title of each page displaying images should be dynamically provided.
   - The current route should be reflected in the `URL`.
   - There should be no more than 24 images displayed.

6. CSS styles

   - The mockups are there for a general guide.

## Extra Features

1. Browser navigation works for the search route

   - The app should keep track of browser history and change the page's data based on the current `URL`. Clicking the browser's forward and back buttons should navigate the user through all search history, keeping the `URL` and fetched data in sync.

2. 404 Error

   - Include a 404-like error route that displays a friendly 404 error page when a `URL` does not match an existing route.

3. Loading Indicator

   - Add a loading indicator that displays each time the app fetches new data. Since the data for the three main topic pages can be requested when the page first loads, it's okay if the loading indicator is only present on the search route.

4. No Matches Message

   - If no matches are found by the search, display a friendly user message to tell the user there are no matches.

## Notes from the Build

To practice utilising CSS skills particularly in React, a conditional inline style has been added to `PhotoContainer`. If there are photos available, the search title will show in 'success green` and if there are no available photos, it returns in 'failure red'.
