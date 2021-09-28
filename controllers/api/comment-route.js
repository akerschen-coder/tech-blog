const router = require('express').Router();
// why isn't this green? 
const { Comment } = require('.../models');
const withAuth = require('../utils/auth');

//    api/comment/

// do a get.post 
// render the comments? 
// have to use req body to create a body for the comments to go into 


router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});
// exports 
module.exports = router;