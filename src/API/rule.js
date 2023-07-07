// @todo create type of rule, make Rule scalable
export class Rule {
    constructor(rule) {
        const {
            comments = { min: null, max: null },
            views = { min: null, max: null },
            title = { min: null, max: null, prop: null },
            privacy = null,

            //special rules:
            ascending = null,
            limit = null,
            orderBy = null,
            groupBy = null,
        } = rule;

        this.comments = comments;
        this.views = views;
        this.title = title;
        this.privacy = privacy;

        //special rules:
        this.special = {
            ascending: ascending,
            limit: limit,
            orderBy: orderBy,
            groupBy: groupBy,
        };
    }
}
