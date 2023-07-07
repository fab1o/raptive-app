import Papa from 'papaparse';

import { Cache } from './cache';

export const SOURCE = '/data/posts.csv';

/**
 * @desc  Gets all the posts from csv and its headers.
 * @returns {Promise<{headers: Array<String>, posts: Array<Object>}>}
 */
export function getPosts() {
    return new Promise((resolve) => {
        let cache = Cache.getCache(SOURCE);

        if (cache) {
            return resolve(cache);
        }

        let timeStampIndex = 6;
        let headerCount = 0;

        Papa.parse(SOURCE, {
            download: true,
            header: true,
            skipEmptyLines: true,
            dynamicTyping: true,
            transform: function (value) {
                if (headerCount === timeStampIndex) {
                    headerCount = 0;

                    return new Date(value).toLocaleDateString();
                }

                headerCount++;

                return value;
            },
            complete: function (results) {
                const rows = Object.keys(results.data[0]).filter(
                    (header) => header !== 'id'
                );

                cache = {
                    headers: rows,
                    posts: results.data,
                };

                Cache.saveCache(SOURCE, cache);

                resolve(cache);
            },
        });
    });
}
