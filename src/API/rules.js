import { Rule } from './rule';

/**
 * @desc System defined rules.
 */
export const Rules = {
    /**
     * @desc A list of the top 50 posts, according to the rules below.
     */
    top50posts: new Rule({
        limit: 50,
        privacy: 'public',
        comments: { min: 10 },
        views: { min: 9000 },
        title: { max: 40, prop: 'length' },
        orderBy: 'views',
    }),
    /**
     * @desc A list of the 50 private posts with the lowest views.
     */
    lowestViewPosts: new Rule({
        limit: 50,
        privacy: 'private',
        orderBy: 'views',
        ascending: true,
    }),
    /**
     * @desc A list of the highest scoring top posts of each day, based on likes.
     */
    topHeightestLowestViewPosts: new Rule({
        limit: 5,
        groupBy: 'timestamp',
        orderBy: 'likes',
        ascending: false,
    }),
};
