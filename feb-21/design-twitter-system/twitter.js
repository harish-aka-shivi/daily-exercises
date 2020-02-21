/**
 * Initialize your data structure here.
 */
const Twitter = function () {
  this.usersMap = {};
};


const User = function (id) {
  return {
    tweets: [],
    following: [],
    followers: [],
    id,
    newsFeed: [],
  };
};

class Tweet {
  constructor(tweetId, userId) {
    this.userId = userId;
    this.tweetId = tweetId;
    this.dateCreated = new Date().getTime();
  }
}

Twitter.prototype.getUser = function (userId) {
  if (!this.usersMap[userId]) {
    const user = new User(userId);
    this.usersMap[userId] = user;
  }
  return this.usersMap[userId];
};

/**
   * Compose a new tweet.
   * @param {number} userId
   * @param {number} tweetId
   * @return {void}
   */
Twitter.prototype.postTweet = function (userId, tweetId) {
  const user = this.getUser(userId);
  const tweet = new Tweet(tweetId, userId);
  user.tweets.push(tweet);
  user.newsFeed.push(tweet);
  user.followers.forEach((id) => {
    const followerUser = this.getUser(id);
    followerUser.newsFeed.push(tweet);
  });
};

/**
   * Retrieve the 10 most recent tweet ids in the user's news feed.
   * Each item in the news feed must be posted by users who the user
   * followed or by the user herself. Tweets must be ordered from most 'd
   * recent to least recent.
   * @param {number} userId
   * @return {number[]}
   */
Twitter.prototype.getNewsFeed = function (userId) {
  const user = this.getUser(userId);
  return user
    .newsFeed
    .sort((tweet1, tweet2) => tweet1.dateCreated - tweet2.dateCreated)
    .map(tweet => tweet.tweetId).reverse();
};

/**
   * Follower follows a followee. If the operation is invalid, it should be a no-op.
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (followerId === followeeId) {
    return;
  }

  const user = this.getUser(followerId);
  const followeeUser = this.getUser(followeeId);

  if (user.following.indexOf(followeeId) !== -1) {
    return;
  }

  user.following = [...user.following, followeeId];
  // user.following.push(followeeId);
  // followeeUser.followers.push(followerId);
  followeeUser.followers = [...followeeUser.followers, followerId];
  // user.newsFeed.push(followeeUser.tweets);
  user.newsFeed = [...user.newsFeed, ...followeeUser.tweets];
};

/**
   * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (followerId === followeeId) {
    return;
  }
  const user = this.getUser(followerId);
  const followeeUser = this.getUser(followeeId);
  user.following = user.following.filter(userId => userId !== followeeId);
  followeeUser.followers = followeeUser.followers.filter(userId => userId !== followerId);
  user.newsFeed = user.newsFeed.filter(item => item.userId !== followeeId);
};

export default Twitter;

/**
   * Your Twitter object will be instantiated and called as such:
   * var obj = new Twitter()
   * obj.postTweet(userId,tweetId)
   * var param_2 = obj.getNewsFeed(userId)
   * obj.follow(followerId,followeeId)
   * obj.unfollow(followerId,followeeId)
   */
