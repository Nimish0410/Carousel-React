This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Notes:

1. The application has been built using ReactJs, Redux and Redux thunk.
2. Media Queries is used for achieving responsive layout.
3. CSS modules are used to load styling into the components and the styles are componentized (Galmor: https://github.com/threepointone/glamor).
4. TDD aims to check if components loads using Enzyme, Chai and Jest.
5. The Carousel component is made generic so that it can hold any custom template(Carousel Item).
6. The sliding of the carousel is done using transition.
7. Images are picked from pixabay making api calls uing axios.
8. The carousel is made to look as close to the mockups provided and is cross browser compatible.
9. Git has been used with the help of gitbash.

GIT WORKFLOW:

1. Branch out the bug-fix branch from develop.
2. Merge the bug-fix branch into develop.(Raise a pull-request)
3. Get this merge reviewed.
4. After the code-freeze merge develop into master.

PROJECT STRUCTURE AND WORKFLOW:

1. Project consists of React components a store and a reducer.
2. Main component is the container component that talks to the store and gets the carousel images from the pixabay account.
3. The data is stored as a tree of objects in the store maintained using redux.
4. The store talks to react components using react-redux, connect method.
5. connect takes 2 arguments mapStateToProps and mapDispatchToProps through which component subscribes to the store changes.
6. This project has 2 react dummy components Carousel and CarouselItems and 1 smart component i.e. Main Component.
7. Reducer is responsible for changing the state tree of the application.
8. Redux workflow has been implemente here - Main Component triggers an action to get the carouselData, action is dispatched to the reducer and the reducer updates the store and the updated state is received in mapStateToProps and sent down the Carousel Component through which the CarouselItems are rendered.

To run the project:

- Move inside the root folder.
- Install all the node packages using 'npm install'
- Once the installation is done, run 'npm start' to run the application.
- You can run the test cases by using the command 'npm test'

(May require create-react-app to be installed globally if not installed, https://github.com/facebook/create-react-app)
