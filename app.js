const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

const connectDB = require('./db/connect');
require('dotenv').config();


//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
// app.get('/hello', (req, res) => {
//     res.send("Task Manager App");
// })
app.use('/api/v1/tasks', tasks);

//middleware
app.use(notFound);
app.use(errorHandler);


const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('Connected to the DB...');
        app.listen(port, console.log(`Server is listening on http://localhost:${port}`));
    } catch (error) {
        console.log(error);
    }
}
start();