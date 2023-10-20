# PWA-Text-Editor
A downloadable progressive web application text editor called J.A.T.E.

## Table of Contents

- [Description](#description)

- [Heroku-Deployment](#heroku-deployment)

- [Installation](#installation)

- [Features](#features)

- [Usage-Information](#usage-information)


## Description

This application was purposefully created to demonstrate and enhance proficiency in progressive web application development. Its primary objective was to gain a deeper comprehension of the underlying mechanisms of the React JavaScript library. The application focuses on four key aspects:

* Configuration: This involves setting up the 'webpack.config.js' file with essential Workbox plugins for service worker and manifest files. Additionally, it includes the setup of CSS and Babel loaders to ensure compatibility with older code.

* Offline Functionality: The application implements asset caching in the 'src-sw.js' file, enabling it to function seamlessly in offline scenarios.

* Database Integration: The application configures a database to manage data, encompassing tasks such as data addition, updating, and retrieval from the IndexedDB.

* User-Friendly Installation: Event handlers are incorporated to streamline the installation process via an install button, making it convenient for users to add the application to their personal stacks and utilize it offline.

## Heroku Deployment

https://pwa-text-editor-eleazarf-48d63417915e.herokuapp.com/

## Installation

Users can access and utilize the application by simply opening their web browsers and visiting the deployed application at the provided URL.

When viewing the application in a browser, users have the option to download it, enabling offline usage.

For those interested in making additional modifications, the process can commence by either cloning the repository using the command `git clone` or by forking the repository.


## Features

After launching the application, any notes added to the site are automatically stored in the IndexedDB. Users don't need to take any manual steps to save their data; the application handles this process seamlessly. The only action required for this functionality to take effect is for the user to click out of the window. When they return to the site, they will discover that all of their notes and other information have been retained and are readily available on the page.

## Usage Information

Utilizing this application is incredibly straightforward. To get started, simply visit the live URL, and you can begin adding notes immediately. In addition, users will spot an install button in the navigation bar, providing the option to download the application for offline usage.

The automatic saving of notes is seamlessly handled by the IndexedDB. All that's needed from the user is to click out of the window, and their notes will be persistently stored, ensuring that they are accessible whether using the application online or offline.

