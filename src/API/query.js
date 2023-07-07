import { Rule } from './rule';

export class Query {
    /**
     *
     * @param {Rule} [rule=new Rule()]
     */
    constructor(rule = new Rule()) {
        this.rule = rule;
    }

    /**
     * @desc Filters data based on built query parameters
     * @param {Array<Object>} data - Data to be filtered
     * @returns {Array<Object>}
     */
    filter(data = []) {
        let output = data;

        Object.entries(this.rule).forEach(([key, value]) => {
            if (key === 'special') {
                return;
            }
            if (value != null) {
                if (typeof value == 'object') {
                    if (value.min != null) {
                        if (value.prop != null) {
                            output = output.filter(
                                (item) => item[key][value.prop] > value.min
                            );
                        } else {
                            output = output.filter(
                                (item) => item[key] > value.min
                            );
                        }
                    }
                    if (value.max != null) {
                        if (value.prop != null) {
                            output = output.filter(
                                (item) => item[key][value.prop] < value.max
                            );
                        } else {
                            output = output.filter(
                                (item) => item[key] < value.max
                            );
                        }
                    }
                } else {
                    output = output.filter((item) => item[key] === value);
                }
            }
        });

        const { ascending, limit, orderBy, groupBy } = this.rule.special;

        if (orderBy) {
            if (ascending) {
                output = output.sort(
                    (itemA, itemB) => itemA[orderBy] - itemB[orderBy]
                );
            } else {
                output = output.sort(
                    (itemA, itemB) => itemB[orderBy] - itemA[orderBy]
                );
            }
        }

        if (groupBy) {
            output = output.reduce((group, item) => {
                const category = item[groupBy];

                group[category] = group[category] ?? [];

                if (limit) {
                    if (group[category].length < limit) {
                        group[category].push(item);
                    }
                } else {
                    group[category].push(item);
                }

                return group;
            }, {});
        } else {
            if (limit) {
                output = output.slice(0, limit);
            }
        }

        return output;
    }
}
