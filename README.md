A quick readme for running a demo typescript/react/material-mui frontend with a mircoservice server.

Hard Requirements

MongoDB
nvm 1.1.11 (optional)
node v18.18.0
npm 9.8.1
Web Browser


1. MongoDB
   Open MongoDB Compass and test connection to mongodb://localhost:27017
   change into database directory, run `npm install`
   verify Node/MongoDB are working, run `node index.js`
   create and/or populate `matchsquare.products` schema, run `node init-db.js`

2. Express Server
   Change into server directory, run `npm install`
   Start Express server, run `node index.js`

3. Webpack Server
   Change into client directory, run `npm install`
   Start Webpack development server, run `npm start`
   The web browser should open automatically to localhost:5000.