# E30 SPA

## Dependencies
* [Npm (ships with Node.js)](https://github.com/joyent/node/wiki/installing-node.js-via-package-manager)

## Install
`npm install`

## Commands
> Please run below commands at root folder of the project (e-thirty/)

### Watch change and re-bundle
`npm run watch`

> Use this command to bundle front-end resources `automatically` for your rails application server

This command will
* watch for JSX & JS file changes in e-thirty/e-thirty/
* re-bundle front-end resource
* copy to `app/assets/e-thirty/` directory.

### Front-end development
`npm start`

> * Use this command to start-up front-end development server with hot reload.
> * Your e-thirty rails application must run first at port 3000

This command will
* start browser-sync with webpack middleware
* watch for JSX & JS file changes in e-thirty/e-thirty/
* re-bundle front-end resource
* reload browser
