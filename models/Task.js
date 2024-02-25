const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        //Validators
        type: String,
        required: [true, 'Must Provide Name'],
        trim: true,
        maxlength: [500, 'Name can not exceed 50 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema);
