# Semester Exam

## Table of context

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Dependencies](#dependencies)
4. [Brief](#brief)
5. [User stories](#user-stories)
6. [Acknowledgements](#acknowledgements)
7. [References](#references)
8. [Author](#author)

## Introduction

- [Style tile](https://xd.adobe.com/view/9dea87d3-870f-4cb6-bdc4-ead0088a65c6-c8b9/)
- [Prototype Desktop](https://xd.adobe.com/view/b8f06851-3275-4470-86a2-606f44983f53-eda3/)
- [Prototype Mobile](https://xd.adobe.com/view/4fb74c05-a32b-422d-a0df-db3dea40a13d-1ae4/)

## Installation

## Dependencies

- React
- JsDocs
- MUI
- icons-material
- Styled components
- React router dom
- EsLint

## Brief

A newly launched accommodation booking site called `Holidaze` has approached you to develop a brand new front end for their application. While they have a list of required features, the design and user experience has not been specified. Working with the official API documentation, plan, design and build a modern front end accommodation booking application.

There are two aspects to this brief: the customer-facing side of the website where users can book holidays at a venue, and an admin-facing side of the website where users can register and manage venues and bookings at those venues.

## User Stories

- A user may view a list of Venues
- A user may search for a specific Venue
- A user may view a specific Venue page by id
- A user may view a calendar with available dates for a Venue
- A user with a stud.noroff.no email may register as a customer
- A registered customer may create a booking at a Venue
- A registered customer may view their upcoming bookings
- A user with a stud.noroff.no email may register as a Venue manager
- A registered Venue manager may create a Venue
- A registered Venue manager may update a Venue they manage
- A registered Venue manager may delete a Venue they manage
- A registered Venue manager may view bookings for a Venue they manage
- A registered user may login
- A registered user may update their avatar
- A registered user may logout

## Style guide

### Headers

```md
     <Typography variant="h1">H1</Typography>
     <Typography variant="h2">H2</Typography>
     <Typography variant="h3">H3</Typography>
     <Typography variant="h4">H4</Typography>
     <Typography variant="h5">H5</Typography>
     <Typography variant="h6">H6</Typography>
```

### Body

```md
     <Typography variant="body1">Body text 1</Typography>
     <Typography variant="body2">body text 2</Typography>
```

### Login / Register modal

```md
     <LoginDialog state={login} setState={setLogin} />
     <RegisterDialog state={register} setState={setRegister} />
```

## End to end testing

The project have cypress with end 2 end testing.

```md
Start the test

npx cypress open

```

## Acknowledgements

- Alexander Barrett [Github](https://github.com/Anclagen)

## References

[React login example](https://javascript.plainenglish.io/basic-react-login-using-external-api-e33322e480cd)
[Dynamic form fields](https://www.freecodecamp.org/news/build-dynamic-forms-in-react/)

## Author
