const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Route for creating a new user
router.post('/users', UserController.createUser);

// Route for retrieving a specific user by ID
router.get('/users/:userId', UserController.getUserById);

// Route for updating a specific user by ID
router.put('/users/:userId', UserController.updateUserById);

// Route for deleting a specific user by ID
router.delete('/users/:userId', UserController.deleteUserById);

module.exports = router;
