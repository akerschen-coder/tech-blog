//this goes to dashboard in handlebars
//this is the only place for the withAuth
const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');
//landing page that redirects to homeroute 
//use with Auth 
// get all the post data to show 
router.get('/', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          // i know i have to include more but not sure what 
          attributes: ['name'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('all-post', {
      posts,
    });
  } catch (err) {
    res.redirect('/login')
  }
});

// get the new post views? 
router.get('/new-post', withAuth, (req, res) => {
  res.render('new-post', {
    // does this have to be inside of the above get? or what do I put here? 
    posts,
  });
});

// edit posts 
router.get('/edit-post', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    //probably an if statment here? idk 
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('edit-post', { 
      posts, 
    });
  } catch (err) {
    res.redirect('/login')
  }
});

// exports 
module.exports = router; 