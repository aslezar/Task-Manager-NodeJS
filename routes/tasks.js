const express = require('express');
const router = express.Router();

const {
    getAllTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks,
    editTasks } = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getTasks).patch(updateTasks).delete(deleteTasks).put(editTasks);

module.exports = router;