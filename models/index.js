const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  hooks:true
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
  hooks: true
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  hooks:true
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
  hooks:true
})

// Export the modules
module.exports = { User, Post, Comment };