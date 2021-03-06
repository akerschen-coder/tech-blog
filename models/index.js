const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User'); 

Post.belongsTo(User,{
    foreignKey: 'userId',
    onDelete: 'CASCADE'
}); 

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
}); 

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
}); 

module.exports = { Post, Comment, User };