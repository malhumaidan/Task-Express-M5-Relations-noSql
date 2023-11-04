const Author = require("../../models/Author");
const Post = require("../../models/Post");



exports.authorsCreate = async (req, res,next) => {
    try {
      const newAuthor = await Author.create(req.body);
      res.status(201).json(newAuthor);
    } catch (error) {
      next(error);
    }
  };


exports.postsCreate = async (req, res,next) => {
    try {
        // req.body.author = req.author._id;

        const { authorId } = req.params;
        const author = await Author.findById(authorId);
        if(!author) return res.status(404).json({message: 'author not found'});

        req.body.author = author._id;


        const newPost = await Post.create(req.body);

        await author.updateOne({$push: {posts: newPost}});
        res.status(201).json(newPost);
    } catch (error) {
      next(error);
    }
  };

  exports.authorsGet = async (req, res) => {
    try {
      const authors = await Author.find().populate('posts');
      res.json(authors);
    } catch (error) {
      next(error);
    }
  };

  exports.fetchOne = async (id,next) => {
    const fetchOne = this.fetchOne
    try {
        const author = await Author.findById(id)
        if(!author) return next({message: fetchOne + ': ' + 'no author'});
        return author
    } catch (error) {
        next(error)
    }
  }