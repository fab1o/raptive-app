import { getPosts } from './getPosts';

import { Cache } from './cache';
import { Query } from './query';

/**
 * @desc  Gets top posts based on given query parameters.
 * @param {Rule} [rule]
 * @returns {Promise<{headers: Array<String>, posts: Array<Object>}>}
 */
export async function queryPosts(rule) {
    const query = new Query(rule);
    const ruleSerialized = JSON.stringify(rule);

    let cache = Cache.getCache(ruleSerialized);

    if (cache) {
        return cache;
    }

    const data = await getPosts();

    const posts = query.filter(data.posts);

    cache = {
        headers: data.headers,
        posts,
    };

    Cache.saveCache(ruleSerialized, cache);

    return cache;
}
