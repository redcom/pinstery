Vimcarshop
====

## Setup
```
git clone https://github.com/redcom/vimcarshop
cd vimcarshop && yarn   # install project dependencies
cd ./client && yarn  # install client dependencies
cd ../ && yarn start   # start client and server in decelopment mode
```

## Commands
```
cd ./ && ./scripts/lintWorking  # run linting from root folder on client and server ( long running process)
cd client && yarn test      # run unit test using jest framework (corrently testing only the reducer for cartItems)
cd ./ && ./node_modules/.bin/flow-typed [install or update] to install or update flow type defition
cd ./ && ./scripts/flowWorking # run flow type check ( long running process )
```

## Architecture preview and project structure

**./server** folder contains source code of the server API.

* I implemented a small CRUD REST Api which talks to a selfmade store. This can be extended to use a real database.
* I would keep cart store on serverside to validate the cart items / products against out of store, or low quantity or other faulty issues. Idealy backed by a database and more business logic.

**./client** folder contains the source code for the application

* I used ***styled-components*** for styling the components.
* I used ***react-redux**** for client side state management
* I separated the business logic and API side efects into **client/src/actions/CartActions.js**
* At the moment the products/items are loaded from JS file **client/src/store/items.js** , would be nice to hookup a serverside storage and fuel the items on application bootup
* The state signature of the application can be checked from **./client/src/store/CommonStoreTypes.js** This is also used for flow type check

**./** root folder of the application contains scripts to execture the application in various stages

There are scripts for precommit hook to prettier the javascript source code for server and client

## TODO
Lots of things can be improved and reworked.
   The error handling is not implemented fully






