# Project Name

Task Manager Web Application with CRUD Functionality

## Built With

- [MongoDB](https://www.mongodb.com/) - NoSQL database for storing and retrieving data.
- [Express.js](https://expressjs.com/) - Web application framework for building robust APIs.
- [Node.js](https://nodejs.org/) - JavaScript runtime environment for server-side development.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Install [Node.js](https://nodejs.org/) (including npm) on your local machine.
- Set up a MongoDB database, either locally or using a cloud provider like Atlas. Obtain the connection URL

## About

This Task Manager web application allows users to keep track of their tasks, edit them, and mark them as completed or incomplete. It is developed using Node.js, Express.js, and MongoDB, providing CRUD (Create, Read, Update, Delete) functionality. Below is an enhanced description of the application's features and components.

    #Technologies Used:
        Node.js: A JavaScript runtime environment that allows executing JavaScript code outside of a web browser.
        Express.js: A web application framework for Node.js that simplifies the process of building robust web applications.
        MongoDB: A popular NoSQL database used to store task data in a flexible JSON-like format.
        Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js, providing a straightforward way to interact with the database.

    #Functionality:
        Create Task: Users can create new tasks by entering a title, description, due date, and any other relevant information.
        Read Task: Users can view a list of all their tasks, displaying details such as the title, description, due date, and completion status.
        Update Task: Users can edit existing tasks to modify their title, description, due date, or any other relevant information.
        Delete Task: Users can delete tasks that are no longer needed.
        Mark as Completed/Incomplete: Users can mark tasks as completed or incomplete, allowing them to track their progress.

    #Application Structure:
        Server Setup: The Node.js server is set up using Express.js, defining routes, middleware, and handling HTTP requests.
        Database Integration: Mongoose is used to connect to the MongoDB database, define the task schema, and perform CRUD operations.
        Task Routes: Express.js routes are implemented for handling different endpoints, such as creating, updating, deleting, and retrieving tasks.
        Task Model: The task model represents the structure and behavior of the task data stored in the MongoDB database.
        Task Controller: The task controller contains the logic for handling requests related to tasks, such as creating, updating, deleting, and retrieving tasks.
        Views and Templates: HTML templates are used to render the task manager interface, displaying tasks and providing forms for creating and editing tasks.
        Client-side Interactions: JavaScript and CSS are used to enhance the user interface, enabling dynamic interactions and form submissions.

    #User Interface:
        Task List: A list displays all the tasks, including their title, description, due date, and completion status.
        Task Creation: Users can fill out a form to create a new task, providing the necessary details such as title, description, and due date.
        Task Editing: Each task in the list has an edit button that allows users to modify its details through a form.
        Completion Status: Each task has a checkbox or button that users can toggle to mark it as completed or incomplete.
        Task Deletion: Each task has a delete button to remove it from the task list.

By implementing this Task Manager web application using Node.js, Express.js, and MongoDB, you can provide users with the ability to create, edit, delete, and track their tasks effectively. Feel free to customize the application's features and user interface according to your specific requirements and design preferences.

## Installation

To install and run the Task Manager NodeJS project, follow the steps below:

1. Clone the repository by running the following command in your terminal:
   ```sh
    git clone https://github.com/aslezar/Task-Manager-NodeJS.git
   ```
2. Navigate to the project directory:
   ```sh
    cd Task-Manager-NodeJS
   ```
3. Install the project dependencies using the Node Package Manager (NPM):
   ```sh
   npm install
   ```
4. Set up a MongoDB database either locally or using a cloud provider like Atlas. Ensure that you have the connection URL for your MongoDB database handy.
5. Create a .env file in the project's root directory and set the following environment variables:
   ```sh
   MONGO_URI=your_mongo_connection_url
   ```
6. Start the server by running the command:
   `sh
npm start
`
   Once the server is running, you can access the application by opening your browser and navigating to http://localhost:3000/. Alternatively, you can use tools like Postman or cURL to send HTTP requests to the provided APIs.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Node.js]: https://nodejs.dev/static/images/brand/logos-js-right/dark.svg
