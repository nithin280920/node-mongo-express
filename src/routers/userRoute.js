const express = require('express');
const router = express.Router();

const { createUser } = require("../controllers/userController")

router.get('/', (req, res) => {
    res.json({ message: 'Get all users' });
});

router.get('/:id', (req, res) => {
    res.json({ message: `Get user ${req.params.id}` });
});

router.post('/', createUser);

router.put('/:id', (req, res) => {
    res.json({ message: `Update user ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.json({ message: `Delete user ${req.params.id}` });
});

module.exports = router;