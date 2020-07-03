# jira/trello like issue tracker app

## `TO-DO`

- remove material-ui card component and create new card component from scratch
- finish collumn layout
- add drag and drop

## `some references for best practices`

https://reactjs.org/docs/thinking-in-react.html

https://programmingwithmosh.com/react/5-react-best-practices-to-learn-in-2020/

https://www.codeinwp.com/blog/react-best-practices/

https://towardsdatascience.com/react-best-practices-804def6d5215

Cards:
    https://medium.com/better-programming/build-a-reusable-responsive-card-component-with-styled-components-3ca14933f7e5


TopBar: https://material-ui.com/components/app-bar/#app-bar


drag and drop:
    
    https://github.com/atlassian/react-beautiful-dnd

    https://react-dnd.github.io/react-dnd/about

## `Issue basic structure`

```
{   
    "id": string -> six charecters
    "title": string,
    "description": string,
    "status": "to-do" || "done" || "doing",  ... basic columns to start, want to add at least four default columns: backlog, doing, done and review
    "addedDate": date,
    "deadLineDate": date
}
```
----------------------------

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
