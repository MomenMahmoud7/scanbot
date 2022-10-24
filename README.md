# ScanBot Mobile App

The main purpose is to scan documents using scanbot sdk and have the ability to share and keep them.

This app is bootstraped using React Native CLI, so make sure that your environment is setup according to [React Native CLI section](https://reactnative.dev/docs/environment-setup)


## Demo

https://user-images.githubusercontent.com/42410999/197590276-c01436d9-de1d-4a98-a94a-8a6a22165412.mp4

https://user-images.githubusercontent.com/42410999/197590336-aba7f07b-316a-4be2-8c09-0350a8a1b907.mp4


## How to start development ?

> ** Note ** Make sure that all the work directory folders have no spaces because this cause an issue with ios build.

1. Go to your work directory in terminal and run `git clone https://github.com/MomenMahmoud7/scanbot.git`

2. run `yarn`

3. run `yarn ios` or `yarn android`


## Structure

**src will be the core application source code.**

### /assets

- all the static assets.

### /components

- all the shared components.

- all the components should be registered and exported from /index.js for a single access point.

- all the components should bear named export to avoid any conflicts.

- components that consist of complex logic, can be further de-structured to small components inside.

### /screens

- all the various features/screens/pages.
- each screen consists of an index.js file which exports the screen components composition as default module.

### /hooks

- all the custom hooks.

### /utils

- all the utility/helper methods.


**Good Luck** 😎😎😎😎😎
