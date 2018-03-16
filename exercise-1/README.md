# Exercise1

This project was generated with Angular 2 and Nodejs.



Path 1 of project using http protocol in Angular 2 to GET data about location with lat,lng input.


Using browser-sync library to create https:// host, to GET data https:// from Google Maps API


Path 2 using Nodejs to create service, get request from Angular 2, processing and return goal data.

## Development server

## Build Angular 2

Set up node_modules:



Run 'npm install'



Please OPEN filr package.json, path: exercise-1/package.json, finding script cofig and edit line from:



"code": "ng serve --ssl 1 --ssl-key \"E:\\HK172\\mmobile-exercise\\mobile-application-development\\exercise1\\node_modules\\browser-sync\\certs\\server.key\" --ssl-cert \"E:\\HK172\\mobile-exercise\\mobile-application-development\\exercise1\\node_modules\\browser-sync\\certs\\server.crt\""

to


"code": "ng serve --ssl 1 --ssl-key location-save-your-repo\\mobile-application-development\\exercise1\\node_modules\\browser-sync\\certs\\server.key\" --ssl-cert location-save-your-repo\\mobile-application-development\\exercise1\\node_modules\\browser-sync\\certs\\server.crt\""


note: mobile-application-development is name of repo.



Run `npm run code` to running the project.


Open your browser and enter 'https://localhost:4200' to access application.