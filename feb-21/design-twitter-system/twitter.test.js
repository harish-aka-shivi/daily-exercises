import Twitter from './twitter';

describe('Twitter system design problems', () => {
  it('should pass the following test case', () => {
    const twitter = new Twitter();
    twitter.postTweet(1, 2);
    const feed1 = twitter.getNewsFeed(1);
    expect(feed1).toEqual([2]);
    twitter.postTweet(1, 5);
    const feed2 = twitter.getNewsFeed(1);
    expect(feed2).toEqual([5, 2]);
    twitter.follow(1, 6);
    twitter.postTweet(6, 7);
    expect(twitter.getNewsFeed(1)).toEqual([7, 5, 2]);
    twitter.follow(1, 11);
    twitter.postTweet(11, 22);
    expect(twitter.getNewsFeed(1)).toEqual([22, 7, 5, 2]);
    twitter.unfollow(1, 6);
    expect(twitter.getNewsFeed(1)).toEqual([22, 5, 2]);
  });
});
