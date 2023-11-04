const Tag = require("../../models/Tag");



exports.tagsCreate = async (req, res,next) => {
    try {
      const newTag = await Tag.create(req.body);
      res.status(201).json(newTag);
    } catch (error) {
      next(error);
    }
  };


  exports.tagsGet = async (req, res) => {
    try {
      // const posts = await Post.find().populate({
      //   path: 'author',
      //   populate: {
      //     path: 'posts',
      //     model: 'Post'
      //   }
      // });
      const posts = await Tag.find().populate('posts','title'); 
      res.json(posts);
    } catch (error) {
      next(error);
    }
  };

  