const express = require('express');
const app = express();
const postsRoutes = require('./api/posts/posts.routes');
const connectDb = require('./database');
const authorsRoutes = require('./api/posts/authors.routes');
const tagsRoutes = require('./api/posts/tags.routes');
const morgan = require('morgan');

connectDb();
app.use(express.json());
app.use(morgan('dev'));
app.use('/posts', postsRoutes);
app.use('/authors', authorsRoutes);
app.use('/tags', tagsRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: 'Path not found' });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || 'Internal Server Error',
  });
});

app.listen(8000, () => {
  console.log('The application is running on localhost:8000');
});
