# React Book Search

## How It Works
This app lets the user search the Google Books API and then save the books they want to read. Saved books and their info are stored in a database so the user can view them later.

## Try It Out
This app is hosted on Heroku [HERE] (https://limitless-sands-27487.herokuapp.com/)

## Technologies Used
* Create-React-App (Node package)
* Axios (Node package)
* React
* Express
* MongoDB
* Mongoose


# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
