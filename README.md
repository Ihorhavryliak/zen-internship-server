# Message app

 [Message app](https://zen-intership-web.onrender.com/)
#
## Description

The Message App is a web-based platform that allows users to leave comments on a website. All user comments are saved to a relational database and can be sorted and displayed in a table format.

# Back-end
## Getting Started:
`Recommended using the operating system Windows.`
To get started with the Message App, follow these steps:
1. Clone the repository
2. In the terminal enter command `npm i`

## Create file `.env` with variables:
1. `PORT= ` ""; //server port. Example: `=5000`
2. `POSTGRES_HOST= ` ""; //postgres host. Example: `=localhost`
3. `POSTGRES_USER = ` ""; // base date user name. Example: `=postgres`
4. `POSTGRES_DB =  ` ""; //base date  name. Example: `=user_postgres`
5. `POSTGRES_PASSWORD =  ` ""; //base date  name. Example: `=1234`
6. `POSTGRES_PORT =  ` ""; //postgres port. Example: `=5432`
7. `FRONT_URL_SITE =  ` ""; // web url site . Example: `=http://localhost:3000`
8. `PRIVET_KEY =  ` ""; // fow jwt (not realized) . Example: `=f782824f6b41f4c4650c9846d1d`

## pgAdmin 4:
1. Install `pgAdmin 4` and connect in file `.env` 

## Run
1. Run  by running `npm run dev` in the project directory 
2. Go to Front-end repo:  [front-end repo](https://github.com/Ihorhavryliak/zen-intership-web). (If you do not clone and install Front-end repo)
#
# Features
The Message App offers the following features:

User Comments: Users can leave comments on the website, which are saved to a relational database.

User Answer: Users can leave answer on comments on the website, which are saved to a relational database.

User Sigh-in: User can Sigh-in and leave posts.

User Sigh-up: User can Sigh-up and leave posts.

Comment Sorting: The app provides the ability to sort comments by User Name, E-mail, and date added (in both ascending and descending order).

Pagination: Comments are displayed in groups of 25 per page.

Security: The app includes measures to protect against XSS and SQL injection attacks.

Design: The app includes a simple CSS design.

# Technologies Used
The Message App is built using the following technologies:

React: A JavaScript library for building user interfaces.

Redux: A JavaScript library for to manage the state 

Node.js: A JavaScript runtime environment for building server-side applications.

Nest.js: A Node.js web application framework for building APIs and web servers.

Postgres: A relational database for storing data.

WebSocket (WS): A WebSocket (WS) for get and send message.

CSS / Bootstrap 5: A stylesheet language for styling web pages.



