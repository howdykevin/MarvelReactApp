# MarvelReactApp

## All data are provided by @TheSuperHeroAPI.com

#### Objectives:

The objective of this app is to display a list of superheroes and allow users to view the profile of the superhero they selected.

##### Requirements: -[x]Responsive to desktop and mobile Clients -[x]Developed using React.js -[x]Display a list of characters in the form of TinderCards(view Wiki for images & videos) -[x]Link each character to their own details page and display relevant character information. -[x]Allows navigation and maintain browser history. React-router-dom library is used.

##### Libraries used:

1. React-swipeable-cards
2. Reactstrap(Bootstrap4 for React)
3. Axios
4. react-router-dom
5. bootstrap
6. react

## IMPT NOTES:(This application is for development purposes only)

- To run this create-react-app, please make sure that "Allow-Control-Allow-Origin" plugin is installed in your Google Chrome.
  > The reason for this is because CORS error will be triggered without the use of the plugin. Proxies have been used to try and resolve CORS error however due to SuperHeroAPI server not having a valid SSL certificate, i am unable to use proxies.
- Since SuperHeroAPI server has SSL certificates issue, the only way for application to access data from the server is to run Google Chrome with --ignore-certificate-errors.

> Note: The above errors could be resolved by finding a better API. However, as of now, there are only 2 available APIs that allows one to get superheroes data, MarvelAPi and SuperHeroAPI. Both of these,however, are unreliable. MarvelAPI website has frequent internal server errors and produces invalid keys.
