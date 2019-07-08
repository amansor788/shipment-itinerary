# shipment-itinerary
The app will allow the users to add, edit, and remove stops from the itinerary. React + Redux

## Author Notes

### Code

* Built manually from scratch using npm + webpack + babel libs (NO create-react-app!).
* Store keeps 2 states: "stops" listed and "selectedStop" (edit mode)
* As the stops don't have a specific identification, the array index is used as ID instead.
* Hooks technology used in Form component in order to handle Form Values and Errors state (not using redux-form!).
* Custom CSS file defined in order to style all the app without using third party libs.
  - Logo and most of the styling obtained from Shipwell login page: https://app.shipwell.com/
* Call to address validation API implemented with AXIOS lib.
* Redux Thunk used as middleware.

### App

#### Form
* Allows to ADD a new STOP after validating:
  - Name not empty.
  - Address not empty with at least 4 characters.
  - API address validated (returns a formatted address which is shown in the table).
* Allows to UPDATE an existing STOP if its previously selected from the table (EDIT BUTTON).
* Allows to CANCEL the Add / Update by cleaning the inputs.

#### Table
* Allows to set a STOP as COMPLETE / INCOMPLETE.
* Allows to EDIT a STOP in the top form and change both NAME and ADDRESS executing all validations required.
* Allows to DELETE a STOP from the list.

## Available Scripts

In the project directory, you can run: (first time remember to run `npm install` previously!)

### `npm start`

Runs the app in the development mode (webpack-dev-server).<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Runs Jest/Enzyme unit tests (jest --watch).
Sample Test: Rendering Components Correctly, Action Creators, Reducers. 

### `npm run create`

Generates /dist folder with built app