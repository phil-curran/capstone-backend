# <p align="center">trakr - backend</p>

A full-stack MERN app that helps you keep track of important habits and tasks.

## Table of Contents

1. [Technologies Used](#technologies)
2. [Description](#description)
3. [Setup / Installation Requirements](#setup)
4. [Known Bugs](#bugs)
5. [License](#license)
6. [Contact Information](#contact)

## Technologies Used <a id="technologies"></a>

- Javascript
- [Express](https://expressjs.com/)
- React / [Vite.js](https://vitejs.dev/)
- [MongoDb](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/docs/)
- [bcrypt](https://www.npmjs.com/package/bcrypt) + [jsonwebtoken](https://jwt.io/)

## Description <a id="description"></a>

This backend manages content for the frontend of [trakr - frontend](https://github.com/phil-curran/capstone-frontend). It is built with Express and MongoDB, and uses bcrypt and jsonwebtoken for user authentication.

## Project Setup / Installation Instructions <a id="setup"></a>

### Set up an account / cluster with MongoDB

https://www.mongodb.com/

### Clone the project into a new directory

Clone this project: <code>git clone [\[https://github.com/phil-curran/SBA320H](https://github.com/phil-curran/capstone-backend)](https://github.com/phil-curran/SBA320H)</code>

### Install Dependencies

From the root directory, run: <code>npm i</code>

### Update example.env file

Rename <code>example.env</code> to <code>.env</code> and replace the information therein with your actual MongoDb URI and desired json web token hash..

### Run the project

From the root directory, run: <code>npm run dev</code>

Then, test all routes with Postman or a similar tool.

## Known Bugs <a id="bugs"></a>

None at this time.

## Roadmap

- Update the app so that user is capable of modifying the main schema for habit checklists by adding, removing, or renaming fields from the default checklist, or choosing from a list of pre-made checklists.

## License <a id="license"></a>

[MIT License](https://opensource.org/licenses/MIT) © 2024

## Contact <a id="contact"></a>

Phil Curran [pecurran@outlook.com](mailto:pecurran@outlook.com) | [LinkedIn](https://www.linkedin.com/in/philcurran/) | [GitHub](https://github.com/phil-curran)
