const router = require('express').Router();
const { User, Post, Comment } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    res.render('dashboard', { loggedIn: req.session.loggedIn });
});



