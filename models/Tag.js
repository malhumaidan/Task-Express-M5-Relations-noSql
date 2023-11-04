const {model, Schema} = require('mongoose')

const tagSchema = Schema({
    name: {type: String, required: true},
    //relations
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}]
});

module.exports = model('Tag', tagSchema);