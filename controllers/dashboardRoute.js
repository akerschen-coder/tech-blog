//this goes to dashboard in handlebars
//this is the only place for the withAuth
const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');
//landing page that redirects to homeroute 
    //use with Auth 
    router.get('/', withAuth, async (req, res) => {
        try {
          // Get all projects and JOIN with user data
          const postData = await Post.findAll({
            include: [
              {
                model: User,
                attributes: ['name'],
              },
            ],
          });

          const posts = postData.map((post) => post.get({ plain: true }));

          res.render('homepage', { 
            posts, 
          });
        } catch (err) {
          res.status(500).json(err);
        }
      });
// get all the post data to show 