# refurbed-assessment

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Android Studio](https://developer.android.com/studio)
- [Xcode](https://developer.apple.com/xcode/)

## Getting started

- `npm install` - Installs the dependencies.
- `npm run prebuild` - Prebuilds the project.
- `npm start` - Starts the Expo development server.
- `npm run android` - Runs the app on an Android emulator or connected device.
- `npm run ios` - Runs the app on an iOS simulator.

## Available scripts

- `npm start` - Starts the Expo development server.
- `npm run android` - Runs the app on an Android emulator or connected device.
- `npm run ios` - Runs the app on an iOS simulator or connected device.
- `npm run lint` - Lints the code.
- `npm run clean` - Cleans the project.
- `npm run prebuild` - Prebuilds the project.
- `npm run prebuild:clean` - Prebuilds the project and cleans it.
- `npm run typecheck` - Typechecks the code.
- `npm test` - Runs the tests.
- `npm run test:watch` - Runs the tests in watch mode.
- `npm run test:coverage` - Runs the tests with coverage.

## Project structure

The project is structured in the following way:

- `app` - The root of the app. This is where the main entry point of the app is. Each leaf in the navigation tree is kept as lean as possible.
- `assets` - Static assets, like images, fonts, etc.
- `components` - The components of the app. They are organized with the atomic design principle in mind.
- `constants` - Constant values, like theme, remote config defaults, etc.
- `contexts` - React Contexts
- `hooks` - Shared custom hooks
- `services` - Services implementations, like API clients, analytics, etc.
- `types` - Shared type definitions
- `utils` - Shared utility functions

### Remote Config
To edit the mock remote configuration, go to the [MockRemoteConfigurationService](services/remote-configuration/MockRemoteConfigurationService.ts) file, line 10.

## Architectural Decisions

### Why Expo Router?
Expo router comes free with the new project template and it's the recommended way to handle navigation in Expo projects. It builds on top of React Navigation so it makes a robust and well tested solution.

### Atomic Design
I choose Atomic Design Principle because it provides a clear and scalable way to organize components. It helps to avoid naming collisions and makes it easy to find and reuse components without the headache of trying to fit shared components in domain specified groups.

### React Context
I used bare React Context for shared state because any other big state management lib seemed like overkill for this project. Of course, if I had to work with a real remote API, I would use something like Redux and RTK Query to have a better structured API handling with clear types and caching.

## Next steps

I would definitely add a better looking styling :).

I would also start integrating with for example Redux and RTK Query to prepare for remote API access.

Another great addition for making the app future-proof is to add a startup init sequence where we can fetch remote config, prefetch data, etc. before showing the app to the user. During the execution, the splash screen would be visible with a timeout.

I would add more tests, especially for the deal_impression analytics event

The filtering could be put in a bottom sheet or modal for better UX because it takes up significant vertical space in current implementation.

## Roll-out
I don't have experience with OTA updates (yet) but in terms of safe roll-out, I'd definitely prepare near-production like staging area where QA can do smoke test and regression testing before pushing to production. 

Production distribution could be done in phases defined by app store release process. 

For new features, I'd consider adding a feature switch and first enabling for a small set of users, preferably known beta testers and after a feedback round, if everything's working fine, gradually roll out to 100% of the user base while also constantly monitoring Crash/ANR events.
