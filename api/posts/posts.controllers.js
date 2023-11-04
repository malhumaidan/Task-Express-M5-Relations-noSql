const Post = require('../../models/Post');
const Tag = require('../../models/Tag');

exports.fetchPost = async (postId, next) => {
  console.log(postId)
  try {
    const post = await Post.findById(postId);
    return post;
  } catch (error) {
    next(error);
  }
};

exports.fetchTag = async (tagId, next) => {
  try {
    const tag = await Tag.findById(tagId);
    return tag;
  } catch (error) {
    next(error);
  }
};



exports.postsDelete = async (req, res) => {
  try {
    await Post.findByIdAndRemove({ _id: req.post.id });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.postsUpdate = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.post.id, req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.postsGet = async (req, res) => {
  try {
    // const posts = await Post.find().populate({
    //   path: 'author',
    //   populate: {
    //     path: 'posts',
    //     model: 'Post'
    //   }
    // });
    const posts = await Post.find().populate('author tags', '-posts -__v'); // the - will exclude the field
    res.json(posts);
  } catch (error) {
    next(error);
  }
};


exports.addTag = async (req, res,next) => {
  try {
      // req.body.author = req.author._id;

      // const { tagId } = req.params;
      // const tag = await Tag.findById(tagId);
      // if(!tag) return res.status(404).json({message: 'author not found'});


      // req.body.tag = tag._id;

      console.log(req.post);
      // console.log(req.tag);

      // await req.post.updateOne({$push: {tags:req.tag._id}});
      // await req.tag.updateOne({$push: {posts:req.post._id}});

      res.status(201).end();
  } catch (error) {
    next(error);
  }
};