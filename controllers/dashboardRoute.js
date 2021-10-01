const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({

      where: {
        userId: req.session.userId
      }
    });
    const  posts = postData.map((post) => post.get({ plain: true }));

    res.render('admin-post', {
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    res.redirect('/login');
  }
});

// get the new post views? 
router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});

// edit posts 
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id); 
    if (postData) {
      const posts = postData.get({ plain: true });
      res.render('edit-post', {
        layout: 'dashboard',
        posts,
      });

    } else {
      res.status(404).end();
    }

  } catch (err) {
    res.redirect('/login');
  }
});

// exports 
module.exports = router;