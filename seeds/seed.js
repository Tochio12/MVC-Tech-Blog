const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (const user of userData) {
    await User.create({
      ...user
    });
  }

  for (const post of postData) {
    await Post.create({
      ...post
    });
  }

  for (const comment of commentData) {
    await Comment.create({
      ...comment
    });
  }

  process.exit(0);
};

seedDatabase();
