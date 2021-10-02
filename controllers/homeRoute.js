const router = require('express').Router();
const { Post, User, Comment } = require('../models');

//login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

//sign up route 
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

// this goes to all-posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [User],
        });
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('all-posts', {
            posts
        });
    } catch (err) {
        res.status(500).json(err);
    }
}); 

//for single posts 
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [User, { model: Comment, include: [User] }],
        });
        if (!postData) {
            res.status(418).end();
        } else {
            const post = postData.get({ plain: true });
            res.render('single-post', { post });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;