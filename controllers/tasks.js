const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const { createCoustomError } = require('../errors/coustom-error')

const getAllTasks = asyncWrapper(async (req, res) => {
    // res.send('Get All Tasks');
    // console.log('inside getAllTasks ');
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
})

const createTasks = asyncWrapper(async (req, res) => {
    // res.send('Create Tasks');
    const task = await Task.create(req.body);
    // console.log(task);
    res.status(201).json(task);
})

const getTasks = asyncWrapper(async (req, res) => {
    // res.send('Get Tasks');
    // res.json({ id: req.params.id });
    // console.log(req.params.id);
    const task = await Task.findOne({ _id: req.params.id });
    if (!task)
        return res.status(404).json({ msg: `No task with id : ${req.params.id}` })
    res.status(200).json({ task })
})

const updateTasks = asyncWrapper(async (req, res) => {
    // res.send('Update Tasks')
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true });
    if (!task) {
        return next(createCoustomError(`No task with id: ${taskID}`, 404));
        // return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
})

const deleteTasks = asyncWrapper(async (req, res) => {
    // res.send('Delete Tasks');
    // console.log(req.params.id);
    const task = await Task.findOneAndDelete({ _id: req.params.id });
    if (!task)
        return next(createCoustomError(`No task with id: ${taskID}`, 404));
    // return res.status(404).json({ msg: `No task with id : ${req.params.id}` })
    res.status(200).json({ task })
})

const editTasks = asyncWrapper(async (req, res) => {
    // res.send('Update Tasks')
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true, overwrite: true });
    if (!task)
        return res.status(404).json({ msg: `No task with id: ${taskID}` });
    res.status(200).json({ task });
})
module.exports = {
    getAllTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks,
    editTasks
}