# React Gallery App - Treehouse Fullstack Degree

This assignment from Team Treehouse is to build an image gallery with search features using `create-react-app`. You will use the `fetch API` and `React Router` with the `Flickr API` to create this project.

## Table of Contents

[Loading the Project](#loading-the-project)

[Instructions](#instructions)

[Extra Credit Instructions](#extra-credit-instructions)

[Browser Testing](#browser-testing)

[Notes from the Build](#notes-from-the-build)

## Loading the Project

- To run the project you will need to first download the files to your local directory.
- Move into the directory and install the npm modules with `npm install`
- Before starting the server, you will first need to get a Flickr API key of your own. You can get this at [Flickr API](#https://www.flickr.com/services/api/misc.api_keys.html). (For more notes see 'Get a Flickr API Key' in the instructions below)
- With the API key now referenced in the `/src` directory as `config.js` you can run the project in developer mode with `npm run start`.

## Instructions

1. Create your project

   - Use the `create-react-app` to set up and create your initial project directory.

2. Build your app components

   - Use the `index.html` file and mockups as a general guide while you create the components of this project.
   - Use the `src/App.js` file as your main container component.
   - Stateless components work well for components that focus on the UI and receive data via `props`. Some examples of the stateless components you could use for your app are:
     - A `Photo` component that displays the `li` and `img` elements.
     - A `Nav` component for the apps navigation links.
     - A `NotFound` component for displaying a user-friendly message when the search returns no results.
   - Stateful components are well suited for your search form and photo container where data can be managed with `state`.

   ```
   The difference between stateful and stateless components can be confusing but in simple terms, one has state and one doesn’t. Stateful components have state and can track changing data. Stateless components do not have state and simply use the data that is passed to them via props.
   ```

   ```
   NOTE: When you navigate the app with the nav links or the browser's forward and back buttons, the URL in the address bar should show the correct route, and the correct data, which you'll request in the next step, should display on the page.

   ```

3. Get a Flickr API key

   - Create/use a Yahoo or Tumblr account to sign in.
   - Apply for a non-commercial API key.
   - You’ll need to set up a `config.js` file in your project that imports your API key into your application so that you and other users can request data from the Flickr API. This should be imported into `src/App.js`.
   - The `config.js` file should look something like this:

   ```
   const apiKey = 'YOUR API KEY';
   export default apiKey;
   ```

   - Import your API key into your application, preferably into `src/App.js`, and save it to a variable like you would any other module, and use the variable where applicable. That way, your app’s users will only need to enter an API key once.

   ```
   NOTE: This `config.js` file MUST be listed in the `.gitignore` file so it won’t be committed to your GitHub repository. This will prevent your keys and tokens from getting posted publicly to GitHub. It is very important that you do NOT upload any of your personal API keys/secrets/passwords to Github or other publicly accessible place. When you submit this project for grading, your project reviewer will create their own `config.js` file and use their own API key to run the project.
   ```

4. Routes

   - Install `React Router` and set up your `<Route>` and `<Link>` or `<NavLink>` elements.
   - Include a "Search" link that includes a search field to let users search for photos.
   - Clicking a nav link should navigate the user to the correct route, displaying the appropriate info.
   - The current route should be reflected in the `URL`.
   - Your app should display at least 3 default topic links that return a list of photos matching some criteria. For example: sunsets, waterfalls, and rainbows.
   - It's okay to request and load the photos for the three default topics when the app first loads. Those default topic pages don't have to re-request and reload new data every time one of those pages are loaded.

   ```
   NOTE: When your routing is setup correctly, `App.js` will have a `Switch` element, and nested inside of that, you will have separate `Route` tags for each of your three main topics.
   ```

   ```
   Pro Tip: When setting up the routes, if you're feeling stuck, it can be helpful to follow along with a course in the unit that covers routes, pausing the videos as needed so you can build alongside the instructor, but instead of building the course project, try to apply what's in the video to this project.
   ```

5. Requesting the data

   - Fetch the data from the Flickr API using the Fetch API or a tool like Axios.
   - Make sure data fetching and state are managed by a higher-level “container” component, like `src/App.js`.
   - It is recommended that you use the following link for help with this part of the project: https://www.flickr.com/services/api/explore/flickr.photos.search.
     - Enter a tag to search for, such as “sunsets.”
     - You should also limit the number of results to 24 using the per_page argument.
     - Choose `JSON` as the output, then “Do not sign call.”
     - Click “Call Method...” At the bottom of the page, and you’ll see an example of the API call you’ll need to make. You can click on the URL to see what the response will look like.

   ```
   NOTE: When you're correctly fetching your data from a container component and passing it down to the display component, and your routing is correctly setup, the `URL` in the address bar will always match what is displayed on the page regardless of whether you use the nav buttons, the browser's forward and back buttons, or paste a `URL` directly into the address bar.
   ```

6. Search

   - Be sure to include a search field feature and a search route to search for new categories of images.

7. Displaying the data

   - Make sure each image gets a unique "key" prop.
   - There should be no console warnings regarding unique "key" props.
   - The title of each page displaying images should be dynamically provided via `props`.
   - The current route should be reflected in the `URL`.
   - There should be no more than 24 images displayed.

8. CSS styles

   - The mockups are just a general guide for how the elements should be arranged and positioned on the page. But other than general arrangement, spacing, and positioning, you are free to experiment with things like color, background color, font, shadows, transitions, animations, etc..

## Extra Credit Instructions

1. Browser navigation works for the search route

   - The app should keep track of browser history and change the page's data based on the current `URL`. Clicking the browser's forward and back buttons should navigate the user through all search history, keeping the `URL` and fetched data in sync.

2. 404 Error

   - Include a 404-like error route that displays a friendly 404 error page when a `URL` does not match an existing route.

3. Loading Indicator

   - Add a loading indicator that displays each time the app fetches new data. Since the data for the three main topic pages can be requested when the page first loads, it's okay if the loading indicator is only present on the search route.

4. No Matches Message

   - If no matches are found by the search, display a friendly user message to tell the user there are no matches.

## Browser Testing

[TBC]

## Notes from the Build

[TBC]
