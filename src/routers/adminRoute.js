const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Get all admins' });
});
router.get('/:id', (req, res) => {
    res.json({ message: `Get admin ${req.params.id}` });
});
router.put('/:id', (req, res) => {
    res.json({ message: `Update admin ${req.params.id}` });
});
router.delete('/:id', (req, res) => {
    res.json({ message: `Delete admin ${req.params.id}` });
});

module.exports = router;