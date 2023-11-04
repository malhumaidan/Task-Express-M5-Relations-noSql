const {model,Schema} = require('mongoose')

const authorSchema = Schema({
    name: {type: String, required: true},
    //relations
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}]
})

module.exports = model('Author', authorSchema);