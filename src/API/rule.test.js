import { Rule } from './rule';

test('Rule', () => {
    const options = {
        limit: 5,
        orderBy: 'likes',
        ascending: false,
    };

    const rule = new Rule(options);

    expect(rule.special).toMatchObject(options);
});
