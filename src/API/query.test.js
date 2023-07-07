import { Rule } from './rule';
import { Query } from './query';

test('Query', () => {
    const query = new Query(
        new Rule({
            limit: 5,
            orderBy: 'likes',
            ascending: false,
        })
    );

    const data = JSON.parse(
        `[{"id":4839210,"title":"Top 5 Makeup Looks for Fall","privacy":"public","likes":95,"views":7125,"comments":11,"timestamp":"10/3/2015"},{"id":4839211,"title":"Giving Your Baby Grown-up Food","privacy":"public","likes":38,"views":16202,"comments":16,"timestamp":"10/4/2015"},{"id":4839212,"title":"Paris Hilton's My New BFF","privacy":"private","likes":113,"views":11227,"comments":11,"timestamp":"10/5/2015"},{"id":4839213,"title":"5 Pretty No-Carve Pumpkin Ideas","privacy":"public","likes":57,"views":11236,"comments":13,"timestamp":"10/6/2015"},{"id":4839214,"title":"Beauty for the Fight Against Breast Cancer","privacy":"public","likes":78,"views":6969,"comments":40,"timestamp":"10/7/2015"},{"id":4839215,"title":"Design Deals - Bird Wall Art","privacy":"private","likes":99,"views":1166,"comments":1,"timestamp":"10/8/2015"},{"id":4839216,"title":"Project Runway Inspires Feather Headbands","privacy":"private","likes":40,"views":14442,"comments":4,"timestamp":"10/9/2015"},{"id":4839217,"title":"Politicians as the New Rockstars?","privacy":"private","likes":95,"views":5307,"comments":36,"timestamp":"10/10/2015"},{"id":4839218,"title":"Be Inspired - One Family's 12-Year Renovation Project","privacy":"public","likes":80,"views":19132,"comments":19,"timestamp":"10/11/2015"},{"id":4839219,"title":"Paris Fashion Week is Kind of Nuts","privacy":"private","likes":91,"views":15180,"comments":34,"timestamp":"10/12/2015"}]`
    );

    debugger;

    const posts = query.filter(data);

    expect(posts).toHaveLength(5);
});
