const express = require('express');
const router = express.Router();
const {
  fetchPost,
  postsGet,
  postsUpdate,
  postsDelete,
  postsCreate,
  postsCreateWithTag,
  addTag,
  fetchTag,
} = require('./posts.controllers');

router.param('postId', async (req, res, next, paramsArray) => {
  console.log(paramsArray);
  const post = await fetchPost(paramsArray, next);
  // const tag = await fetchTag(paramsArray[1], next);
  if (post) {
    req.post = post;
    // req.tag = tag;
    next();
  } else {
    const err = new Error('Post Not Found');
    err.status = 404;
    next(err);
  }
});

router.get('/', postsGet);

router.post('/:postId/:tagId', addTag);



router.delete('/:postId', postsDelete);

router.put('/:postId', postsUpdate);

module.exports = router;
