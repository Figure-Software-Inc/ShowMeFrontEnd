# ShowMe Front-end Repository
This repository contains the React Native front-end framework portion of the mobile application ShoMe. The main directory
and app functioning contents will be stored in 'frontend.' On the other hand, we used Locofy to auto-generate certain 
components and assets, so it would make it easier when designing the functional portion of the app. The 'locofy' folder has
the image assets and appropriate CSS styling needed, so we would advise focusing on using this folder for reference to styles.

## Install/Setup Environment
Once you clone the repository onto your local IDE, please make sure you ```cd frontend``` to shift into the parent directory
for this project and avoid the ```locofy``` folder before running.

Run ```npm install``` to download the necessary external libraries we used for the project. Finally, run the project by typing ```npx expo start --tunnel```. We prefer ```--tunnel``` since it makes the development process easier and loads up the app faster with a proxy URL.

## Directory Rundown
- [assets](frontend/assets) - contains all the auto-generated images, colors, and CSS stylesheets from Locofy necessary for building the app. I would advise looking here for appropriate CSS styling to streamline the process of creating the app.
- [components](frontend/components) - stores the React built-in context component needed for sign-in and sign-out purposes.
- [data](frontend/data) - contains a ```Users.js``` file that mimics a database for the current app. Please use this to reference when logging a user in or out temporarily and for dev purposes. To advance the sign-in and sign-out application, we advise using a cloud database like Firestore Realtime Database to add new users and check-in/check-out existing users, so you won't have to reference this file.
- [screens](frontend/screens) - has all the appropriate screens that will be necessary for the application. Each screen already has built-in navigation that is necessary to the main navigator components, but they do not have the necessary styling and functionality yet due to time constraints of the project. The cool feature about each of these screens is that the Locofy auto-generated screens can be directly added onto the exported component. A good exmaple is in the ```DiscoverScreen.js```. However, you will need to code the autonomy and functionality. For this, please reference the ```SignInScreen.js``` and ```SignUpScreen.js``` as examples.

## Navigator Stacks
- [DrawerContent.js](frontend/DrawerContent.js) - The file contains the functionality for the sidebar drawer. Thanks to the React Native libraries, you can update or add the ```DrawerItem``` to add more app navigation links or features like "Learner Points."
- [RootStackScreen.js](frontend/RootStackScreen.js) - This has the functionality to switch between the 'Splash,' Sign-in, and Sign-out functionality and individual screens. In the ```App.js```, this screen will be called whenever the login state is not satisfied.
- [StackScreens.js](frontend/StackScreens.js) - Finally, this tool contains the functionality for the bottom tab bar on the home page of the application. It shifts between the Discover, Search, and Profile screen for the user to quickly traverse between. Also contains the appropriate animations and CSS styling.

## Miscellaneous
- [App.js](frontend/App.js) - The main App.js file contains the main Navigation components and handles the majority of login and logout states using React Hooks like Reducer, Context, and Memo. I would advise separating this login and signup token portion outside of App.js to make editing authentification easier.
- [react-native.config](frontend/react-native.config.js) - This was necessary for fitting assets properly into both iOS and android.

## Current App Demo

https://github.com/divyanitin3/ShowMeFrontEnd/assets/85178092/361d9251-a83e-460c-9ea5-7eb87381dced

## Future To-Do List
This following list comprises all of the future features we think need to be handled next...
- Having OAuth authentification with Google, LinkedIn, and Facebook since we didn't implement the third-party sign-in funcitonality for that.
- 
