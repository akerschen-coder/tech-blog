const router = require('express').Router();
// why isn't this green? 
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//    api/comment/

router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.userId,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});
// exports 
module.exports = router;