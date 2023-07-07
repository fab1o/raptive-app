import { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';

import { Rules } from '../../API/rules';
import { queryPosts } from '../../API/queryPosts';

import PostList from '../ListComponent/PostList';

const SecondTab = (data) => {
    let [headers, setHeaders] = useState([]);
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        async function loadData() {
            const { headers, posts } = await queryPosts(Rules.lowestViewPosts);

            setHeaders(headers);
            setPosts(posts);
        }

        loadData();
    }, []);

    return (
        <div className="SecondTab">
            <PostList headers={headers} posts={posts} />
            <CSVLink
                className="App-link"
                filename="lowestViewPosts.csv"
                data={posts}
            >
                Export to CSV
            </CSVLink>
        </div>
    );
};

export default SecondTab;
