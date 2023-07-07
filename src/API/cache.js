export class Cache {
    static cache = {};

    static saveCache(key, data) {
        Cache.cache[key] = data;
    }

    static getCache(key) {
        return Cache.cache[key];
    }

    static clear() {
        Cache.cache = {};
    }
}
