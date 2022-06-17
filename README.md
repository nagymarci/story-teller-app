# Story-teller app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Configuration
The app expect configuration available in variables defined in `config.js`. This file is referenced from `index.html`
to be available globally. 
Format:
```
window.apiUrl = "$API_URL"
window.wsUrl = "$WS_URL"
window.tracking = "$GA_TRACKING"
```

### Docker
In a docker environment the file is created by the [scripts/30-config.sh](https://github.com/nagymarci/story-teller-app/blob/81b574ac70653bee168ca97ac30683925710af33/scripts/30-config.sh)
script. When the docker container is started, the environment variables needs to be set.

### AWS Amplify hosting
Set the environment variables in the Amplify Console, and use the amplify.yml to build the app. The config.js with the proper content will be generated into the `public` folder.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run generate-config`

Generates config.js from the environment variables. Used mainly in AWS Amplify

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
