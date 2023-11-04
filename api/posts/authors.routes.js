const express = require('express');
const { postsCreate, authorsCreate, authorsGet } = require('./authors.controllers');


const router = express.Router()




// router.param('authorId', async (req,res,next, authorId)=>{
//     try {
//         const author = await fetchPost(authorId, next);
//         if (author) {
//           req.author = author;
//           next();
//         } else {
//           next({ message: 'Param: ma lgait author' })
//         }
//       } catch (error) {
//         next(error);
//       }
// })

router.post('/:authorId', postsCreate)
router.post('/',authorsCreate)

router.get('/', authorsGet)


module.exports = router;









