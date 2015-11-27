import Ember from 'ember';
import { getJSONAsPromise } from '../utils/promise-ajax';

const { Controller, get, set } = Ember;

export default Controller.extend({
  selectedPost: null,

  init() {
    this._super(...arguments);
    this.topPosts = [];
    this.controversialPosts = [];
  },

  actions: {
    selectPost(post) {
      set(this, 'selectedPost', post);
    },

    findSubreddit(subredditName, type) {
      return getJSONAsPromise(`https://www.reddit.com/r/${subredditName}/${type}.json`)
        .then((subreddits) => {
          let posts = get(this, `${type}Posts`);

          return posts.replace(0, posts.length, subreddits.data.children.mapBy('data'));
        });
    }
  }
});
