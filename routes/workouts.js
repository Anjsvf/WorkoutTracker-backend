const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Workout = require('../models/Workout');

// @route   POST api/workouts
// @desc    Add new workout
// @access  Private
router.post(
    '/',
    [
        auth,
        [
            check('type', 'Type is required').not().isEmpty(),
            check('duration', 'Duration is required').isInt({ min: 1 }),
        ],
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { type, duration, distance, calories, notes } = req.body;

        try {
            const newWorkout = new Workout({
                user: req.user.id,
                type,
                duration,
                distance,
                calories,
                notes,
            });

            const workout = await newWorkout.save();
            res.json(workout);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

// @route   GET api/workouts
// @desc    Get all workouts
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const workouts = await Workout.find({ user: req.user.id }).sort({ date: -1 });
        res.json(workouts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


// @route   DELETE api/workouts/:id
// @desc    Delete workout
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id);

        if (!workout) {
            return res.status(404).json({ msg: 'Workout not found' });
        }

        if (workout.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await workout.deleteOne();
        res.json({ msg: 'Workout removed' });
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Workout not found' });
        }
        res.status(500).send('Server error');
    }
});


module.exports = router;