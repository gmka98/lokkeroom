# Node.js and PostgreSQL REST API for Message Lobbies
This is a Node.js and PostgreSQL REST API that allows users to create message lobbies, post messages, and interact with other users. The API only returns JSON and not HTML.

## Features

Users can sign up using an email and password
Users can log in using their email and password
Users can create a message lobby and become the admin of said lobby
Users can view messages from their lobby
Users can post messages on their lobby
Users can edit their own messages
Nice-to-Have Features (Doable)

## Admin

Admins can delete messages in their lobby
Admins can edit messages in their lobby
Pagination system for displaying messages
Users can join multiple teams
Harder-to-Implement Features

Direct message system for user-to-user communication
Anti-bruteforce system that limits failed login attempts
Admins can add people who have not yet registered to the platform
##  Technologies Used
Node.js
PostgreSQL
Express.js
JWT (JSON Web Tokens)
bcrypt (password hashing)
Sequelize (ORM for database interactions)
Getting Started
To get started with this project, you'll need to follow these steps:

## Clone the repository onto your local machine:
Install the necessary dependencies using npm install
Create a PostgreSQL database and configure the database connection in the .env file
Run the database migrations using npm run migrate
Start the server using npm start

## API Endpoints
POST /api/auth/signup - Create a new user account
POST /api/auth/login - Log in an existing user
POST /api/lobbies - Create a new lobby
GET /api/lobbies/:lobbyId - Get messages from a specific lobby
POST /api/lobbies/:lobbyId/messages - Post a new message to a lobby
PUT /api/lobbies/:lobbyId/messages/:messageId - Edit an existing message
DELETE /api/lobbies/:lobbyId/messages/:messageId - Delete an existing message

## Conclusion
This Node.js and PostgreSQL REST API provides a solid foundation for creating message lobbies and allowing users to interact with each other. The must-have features provide a basic level of functionality, while the nice-to-have and harder-to-implement features can be added to improve the user experience.



