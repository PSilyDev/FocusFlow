// MONGOOSE

// IMPORTS
const mongoose = require('mongoose');
require('dotenv').config()

// step 1 - connect to mongodb
mongoose.connect(process.env.DB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB error:", err));
// step 2 - define schemas

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
})

const ToDoSchema = new mongoose.Schema({
    userId: String,
    title: String,
    description: String,
    date: Date,
    priority: String,
    completed: Boolean,
    inprogress: Boolean
})

// // step 3 - create model for schemas
const User = mongoose.model('User', UserSchema);
const ToDo = mongoose.model('ToDo', ToDoSchema);

// step 4 - export models
module.exports = {
    toDo: ToDo,
    user: User
}