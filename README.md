# Fitness Tracker

This is a project, not yet concluded, which aims to offer the user the creation of customized exercise training and follow its evolution. 
To present the line of thought behind this project, I will divide this text into 3 parts:

- 1: Survey of the technological apparatus; 
- 2: Proposed architecture; 
- 3: Suggestions of what should be done.

## _Survey of the technological apparatus_

In this stage, some possibilities to provide data for the App were evaluated, with Strapi being the first tool evaluated. 
This tool according to its documentation 

>Strapi is an open-source headless CMS that gives developers the freedom 
to choose their favorite tools and frameworks and allows editors to manage 
and distribute their content using their application's admin panel. 
Based on a plugin system, Strapi is a flexible CMS whose admin panel 
and API are extensible - and which every part is customizable to match any use case_

Some tests were carried out where it was verified that its use would take some time to integrate with an authentication service to be used in App,
for this reason it was not adopted.

The following RestFull APIs were evaluated:

- [Workout Planner](https://rapidapi.com/nabeeldev1340/api/workout-planner1/): An api that provides a training plan according to preferences selected by the user, its purpose partially meets 
the requirement of creating training plans, however this api does not allow customization such as adding an exercise, 
so it was not chosen for the project;

- [MuscleWiki](https://rapidapi.com/rahulbanerjee26/api/musclewiki/): This api is a scrap of the site of the same name, it offers a detailed 
search of exercises by type of muscle as well as the level of difficulty, each exercise contains an explanation of instructions on how to perform 
each exercise and even offers links to instructional videos , this api was chosen for the project.

Finally, the Google Firebase Tool was chosen to integrate with the project, according to Google 
>Firebase is a set of back-end cloud computing services and application development platforms provided by Google. It hosts databases, services, authentication and integration for a variety of applications including Android, iOS, JavaScript, Node.js, Java, Unity, PHP and C++". 

The free plan perfectly contemplates an app like Fitness Tracker, the chosen tools were:

- Remote Config: For secure storage of sensitive credentials and environment information;
- Cloud Firestore: To provide the database;
- Authentication: To provide login with social networks and email providers like Gmail.

## _Proposed architecture_

This project has been configured to use TypeScript and to get the best organization possible the `Fitness Tracker` project contains the following directories:
[`components`](./components):

> Where are the codes referring to visual components.

[`src/hooks`](./src/hooks).

> In this directory is present the custom Hooks useFirebase and useAppContext. Its use is a practical example of separation of responsibilities. 
In this project, UseFirebase is responsible for integrating the app with the chosen Firebase tools. useAppContext is responsible for creating and 
maintaining the application context, it does this using React's own api, useContext. 

>This api is sufficient for the project given its size. For larger projects it may be suitable to use context management tools like Redux Toolkit or Zustand,
these tools aim to simplify the implementation and use of context in a more complex application, the Redux Toolkit provides a centralized way 
to handle context and requests asynchronous, Zustand offers hooks to manipulate the context, simplifying the manipulation.


> On larger projects a custom Hook may have more responsibility, such as processing data for screens and implementing business rules at the mobile level.

[`src/routes`](./src/routes).

> In this directory are the settings related to the application navigation. In this project, the `react-native-navigation` library was used because it is a consolidated library, with good documentation and good support for React Hooks.

[`src/pages`](./src/pages).

> In this directory are the three main screens of the project, Workouts, Progress and Profile.

[`src/services`](./src/services).

> This is one of the fundamental directories of this project. It contains the files: (i)`MucleWiki.service.ts` - responsible for providing an axios instance connected to the MuscleWike API, in this project the use of this file was minimal, but it can be used to intercept requests and inject information into the header, such as Bearer Token, custom attributes, among others; 
(ii)`MucleWiki.api.ts` - responsible for mapping the routes used by the project.

[`src/store`](./src/store).

> this directory contains the use of React's context management api, for this project it is enough since there are no more complex iterations and there is no need to intercept requests, for example.

[`src/util`](./src/util).

> This directory contains the types used in the project and functions for inserting the TestID to do tests end-to-end.

### Dependencies

This project uses the follown dependencies

- Component UI: MagnusUI 
- Navigation: React Native Navigation
- Firebase: React Native Firebase
- Input data handle: React hook forms
- Graphs: React native chart
- Animations: Lottie React Native
- HTTP Handle: axios
- Local Storage: react-native-asyncstorage
- End-to-End test: Wix/Detox
- Unit Test: React Native Testing Library
- Commit handle: Git-cz

### Installing and running

_How to run the project_

Clone the project `git clone -b chore/initial-structure git@github.com:ramoncruzz/fitnessTrackerApp.git`

and execute: `yarn install`, `cd ios/`, `pod install`, `cd ..`

> [ios]: `yarn ios` > [android]: `yarn android`

## _Suggestions of what can be done_

This project is not finished, it has an initial structure aimed at organization and maintenance, for completion it would be necessary to carry out the following activities:

- _UI/UX_: Conclude the visual components of the App in the components folder, for this project a simplified organization was designed where 
each component is a subfolder. On the other hand, in a real project where there would be constant conversations with a UI/UX team, 
it would be interesting to apply the Atomic Design approach, since this approach uses a simple analogy to provide a componentization and 
reuse of visual components , reuse can contribute positively to design and coding work. Another possible approach in 
the App's component package would be to implement each component with its respective property type, this contributes to obtaining good maintainability because 
the components' interface would always be referenced, so if it is necessary to change the Magnus UI library for another one, such as React Native Elements would need to maintain the properties' typing, in this way the decoupling would be favored.

- _Custom Hooks_: The use of custom hooks can contribute to the project in the separation of responsibilities, in this project only two are implemented, but the plan is to have some more custom hooks like useWorkout, this hook would be responsible for calling the service layer, getting the data coming from the MuscleWiki API and process this data and deliver it to the screen, which in turn would pass it on to the appropriate visual components. In this way, the screen would not be responsible for processing the data and thus we would obtain another decoupling between the screens and data processing. This practice contributes to the project's evolutionary and corrective maintenance, and also contributes to project testing.


- _CI/CD_:To provide a continuous integration and continuous delivery track, we could use the Bitrise platform, as it has a simplified and friendly approach with React Native projects, a suggestion in using this would be to separate the deploys into two workflows, one for Android and the other for iOS, even if the tool offers the possibility of creating just one workflow to build the two artifacts, .ipa and .apk, however there is a price difference in cloud machines that carry out this work and in the case of a single workflow a configuration would be necessary macOS. As a matter of financial cost, it would be better to create a workflow with Linux configuration to build the Android artifact and another with MacOS configuration to build the iOS artifact. There is another possibility without cost, would be the use of the Fastlane tool, this tool performs the automatic build and delivery, but using a local machine, it is a zero cost option.


- _Firebase and similar tools_: Firebase provides several tools that can further improve the project, such as the Cloud messaging tool, it supports the use of push notifications that carry data to be read by apps and this can be used for data analysis and engagement, the Events tool can further help with data analysis and user engagement. To monitor errors and crashes, you can use the Crashlytics tool, however this tool works well for 100% native projects, for hybrid projects with React Native this tool does not deliver errors well, it will only display errors on the native side, not on the typescript side. There is another commercial tool that is widely used for backends and frontends. Dynatrace, this tool also does not work well in React Native projects, despite offering its own library for this, in practice its monitoring panels do not present what they should.






