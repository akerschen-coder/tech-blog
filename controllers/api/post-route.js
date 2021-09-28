const router = require('express').Router();
// why isn't this green? 
const { Post } = require('.../models');
const withAuth = require('../utils/auth');

//    api/post/

// do a get.post 
// render the post?
// how do I make sure it still has a body? 
// have to use req body to create a body for the post to go into 

router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// i have to put this somewhere with its id? 
// ugh 

// then be able to delete it via id 
    // this is small balls energy 


// exports 
module.exports = router;