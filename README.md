# electronReactRedux
An electron demo using a React Redux front-end.

## Install
> npm install

## Run Dev enviroment
> npm start

This will run the dev server for the client on **localhost:3000** but the browser will **not** open.

Changes made in **/src** will automatically refresh react build

Changes made in **/public** will automatically refresh and electron will restart (using nodemon).

## Build for production
> npm run build

Automatically set up to build production ready react scripts and deploy them within the built electron app.


## Bootstrap
Bootstrap and MDBreact are included with all react-bootstrap dependancies


## Redux with IPC
Redux middelware has been setup with the IPC renderer so actions "IPC" are deployed to the server side. A demonstration of a simple PING => PONG has been included.
