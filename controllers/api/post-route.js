const router = require('express').Router();
// why isn't this green? 
const  Post  = require('../../models/Post');
const withAuth = require('../../utils/auth');

//    api/post/


router.post('/', withAuth, async (req, res) => {
    const body =req.body;
    try {
        
        const newPost = await Post.create({
            ...body,
            userId: req.session.userId,
        });

        res.json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

//update post 
router.put('/:id', withAuth, async (req, res)=>{
   try{
       const [data]= await Post.update(req.body, {
           where:{
               id: req.params.id
           }
       });
       if(data>0){
           res.status(200).end();
       }else{
           res.status(404).end();
       }

   }catch(err){
    res.status(500).json(err)
   }
});

// then be able to delete it via id 
router.delete('/:id', withAuth, async (req, res)=>{
    try{
        const [data]= await Post.destroy({
            where:{
                id: req.params.id
            }
        });
        if(data>0){
            res.status(200).end();
        }else{
            res.status(404).end();
        }
 
    }catch(err){
     res.status(500).json(err);
    }
 });

// exports 
module.exports = router;