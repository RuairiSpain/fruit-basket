## Shopping basket app - React/Redux

Product and Basket Single Page app, it was started from create-react-app (CRA).  Normal CRA steps to build and eject, small change: used yarn instead of npm. Illustrates React, Redux with most common design patterns: props, state, redux reducers/stores/selectors/middleware and bootstrap-react RWD.

#### Notes:
* Feature tested in Chrome 56 adn Edge 38.
* Final step in Checkout modal dialog is a print screen, which represents the printable receipt.
* Basket is cleared and reset once you checkout and see print screen.


## Installed dependency
Download and install node:      https://nodejs.org/en/download/

***
## How to use:
1. npm install yarn -g  (install yarn - Used yarn because it's faster to download dependencies than npm.  yarn downloads packages about 3 minutes or longer)
2. yarn run install     (download NPM dependencies)
3. yarn run start       (run react-dev-server and starts browser on port 3000)
4. yarn run test        (run unit tests)

***
## To Do
1. Add inventory reducers to inc/dec stock levels as products are added/removed from basket
2. Improve and refactor Enzyme tests, add tests to increase code coverage
3. Add react-routing to improve SEO and allow for larger number of products
4. Add form entry for checkout, with authentication system for hydrate/dehydrate basket state after login
5. Node/Express/MongoDB to scale features to server side

