# Holidaze Accommodation Booking Application

## Table of context

- [Introduction](#introduction)
- [Project Brief](#project-brief)
- [Requirements](#requirements)
- [Technical Restrictions](#technical-restrictions)
- [Project Resources](#project-resources)
  - [Project Timeline](#project-timeline)
  - [Design Prototype and Style Guide](#design-prototype-and-style-guide)
  - [Project Management](#project-management)
  - [Repository](#repository)
  - [Live Demo](#live-demo)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Installation Steps](#installation-steps)
  - [Available Scripts](#available-scripts)
  - [Dependencies](#dependencies)
- [End to End Testing](#end-to-end-testing)
- [Acknowledgements](#acknowledgements)
- [References](#references)
- [Author](#author)

## Introduction

Welcome to the Holidaze Accommodation Booking Application! This project is designed to showcase the development capabilities, visual design skills, and technical expertise acquired over the past two years. Holidaze, a newly launched accommodation booking site, has approached us to develop a brand new front end for their application.

In this project, we will be working with the official API documentation provided by Holidaze to plan, design, and build a modern front-end accommodation booking application. The goal is to create a user-friendly and visually appealing application that allows users to book holidays at various venues and provides an admin-facing interface for managing venues and bookings.

## Project Brief

A newly launched accommodation booking site called **Holidaze** has approached you to develop a brand new front end for their application. While they have a list of required features, the design and user experience has not been specified. Working with the official API documentation, plan, design and build a modern front end accommodation booking application.

There are two aspects to this brief: the customer-facing side of the website where users can book holidays at a venue, and an admin-facing side of the website where users can register and manage venues and bookings at those venues.

## Requirements

The project focuses solely on developing the front-end application that interacts with the existing API managed by Holidaze. The API documentation and resources can be found under Holidaze in the Noroff API documentation.

To ensure a successful implementation, the project has been defined through user stories, which outline the required functionality from both the customer and admin perspectives. Some of the key user stories include:

- Viewing a list of venues
- Searching for a specific venue
- Viewing detailed information about a venue
- Accessing a calendar with available dates for a venue
- Registering as a customer and creating bookings
- Managing bookings and upcoming reservations
- Registering as a venue manager and managing venues
- Updating avatars and logging in/out

## Technical Restrictions

To adhere to the company's technical guidelines, the following restrictions have been set:

- Use of an approved JavaScript framework (React >16)
- Use of an approved CSS framework (Bootstrap >5, Tailwind >3, MUI >5, Styled Components, CSS Modules)
- Hosting the application on an approved static host (GitHub Pages, Netlify)
- Use of an approved design application (Adobe XD, Figma, Sketch)
- Use of an approved planning application (Trello, GitHub Projects)

## Project Resources

To assist you in planning and executing the project, the product owner has requested links to the following resources:

- Gantt chart for project timing
- Design prototype
- Style guide
- Kanban project board
- Repository link
- Hosted application demo link

## Project Timeline

To ensure a smooth development process, a Gantt chart has been prepared to outline the project's timing and milestones. You can find the Gantt chart here.

## Design Prototype and Style Guide

A design prototype has been created to guide the visual and user experience design of the application. You can access the prototype [here](https://github.com/users/Christonn93/projects/8/views/4).

Additionally, a comprehensive style guide has been prepared to maintain consistency throughout the project.

- [Style tile](https://xd.adobe.com/view/9dea87d3-870f-4cb6-bdc4-ead0088a65c6-c8b9/)
- [Prototype Desktop](https://xd.adobe.com/view/b8f06851-3275-4470-86a2-606f44983f53-eda3/)
- [Prototype Mobile](https://xd.adobe.com/view/4fb74c05-a32b-422d-a0df-db3dea40a13d-1ae4/)

## Project Management

To facilitate project management and collaboration, a kanban project board has been set up. You can access the project board [here](https://github.com/users/Christonn93/projects/8/views/1). The board will provide an overview of tasks, their status, and assignment.

## Repository

The project repository can be found [here](https://github.com/Christonn93/holidaze). Feel free to explore the code and contribute to the development.

## Live Demo

A live demo of the Holidaze Accommodation Booking Application is available [here](https://holidaze-ex.netlify.app/). Feel free to test the features and experience the application in action.

We hope you find this project exciting and challenging, and we look forward to seeing your implementation of the Holidaze Accommodation Booking Application!

## Installation

This guide will help you get started with running the This project locally.
Please follow the steps below:

#### Prerequisites

Before you begin, ensure that you have the following software installed on your machine:

- Node.js (version 14 or later)
- npm (Node Package Manager)

#### Installation Steps

1. Clone the repository to your local machine using Git or download the source code as a ZIP file and extract it.

2. Open a terminal or command prompt and navigate to the project directory.

3. Install the project dependencies by running the following command:

```bash
npm install
```

or

```bash
npm i
```

This command will install all the dependencies specified in the package.json file.

4. Create a .env file in the project root directory and add any required environment variables. You can refer to the .env.example file for the required variables. For example, if you have an API_BASEURL variable, your .env file should contain:

```plaintext
API_BASEURL=http://example.com/api
```

Make sure to replace <http://example.com/api> with the actual API base URL.

5. Once the dependencies are installed and the environment variables are set, you can start the development server by running the following command:

```bash
npm start
```

This command will start the development server and the application will be accessible at <http://localhost:3000>.

6. Open your web browser and visit <http://localhost:3000> to see the running React application.

#### Available Scripts

In the project directory, you can use the following npm scripts:

Starts the development server.
`npm start`

Builds the production-ready optimized bundle.
`npm build`

 Runs the test scripts.
`npm test`

Ejects the app from the create-react-app configuration.
`npm run eject`

Runs the Cypress end-to-end tests.
`npm run cypress-test`

Opens the Cypress test runner for running end-to-end tests.
`npm run test-e2e`

```md
Please note that some scripts may require additional configuration or setup, such as the Cypress tests.
```

That's it! You have successfully installed and started the React project locally. You can now explore and modify the code according to your needs.

If you encounter any issues during the installation process, please refer to the project's documentation or seek support from the project's maintainers.

#### Dependencies

- @emotion/react: 11.10.6
- @emotion/styled: 11.10.6
- @mui/icons-material: 5.11.16
- @mui/x-date-pickers: 6.2.1
- @mui/x-date-pickers-pro: 6.2.0
- @sweetalert2/theme-material-ui: 5.0.15
- @testing-library/jest-dom: 5.16.5
- @testing-library/react: 13.4.0
- @testing-library/user-event: 13.5.0
- axios: 1.3.6
- date-fns: 2.29.3
- dotenv: 16.0.3
- formik: 2.2.9
- jsdoc: 4.0.2
- react: 18.2.0
- react-calendar: 4.2.1
- react-date-range: 1.4.0
- react-dom: 18.2.0
- react-dotenv: 0.1.3
- react-hotjar: 6.1.0
- react-material-ui-carousel: 3.4.2
- react-router-dom: 6.10.0
- react-scripts: 5.0.1
- styled-components: 5.3.9
- sweetalert2: 11.7.3
- web-vitals: 2.1.4
- yup: 1.0.2

## End to end testing

The project using cypress for end 2 end testing.

```bash
npm run test-e2e
```

## Acknowledgements

- Alexander Barrett [Github](https://github.com/Anclagen)
- Talitha
- Oliver Dipple
- Martin Kruger
- Connor O'Brien
- Jan Henning
- Karl Kvammen

## References

- [React login example](https://javascript.plainenglish.io/basic-react-login-using-external-api-e33322e480cd)
- [Dynamic form fields](https://www.freecodecamp.org/news/build-dynamic-forms-in-react/)
- [MUI](https://mui.com/material-ui/getting-started/overview/)

## Author

<div class="author-wrapper">
<img src="https://i.ibb.co/wKLknRh/153684720-10158795395525490-149819903027147096-n.jpg" alt="Author">
<h3>Christopher Tønnesland</h3>
</div>

<style>
.author-wrapper {
 display: flex;
 gap: 20px;
 align-items: center;
}
.author-wrapper > img {
 width:150px;
 height:150px;
 border-radius: 50%;
}
</style>
