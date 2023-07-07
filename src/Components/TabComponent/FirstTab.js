import { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';

import { Rules } from '../../API/rules';
import { queryPosts } from '../../API/queryPosts';

import PostList from '../ListComponent/PostList';

const FirstTab = (data) => {
    let [headers, setHeaders] = useState([]);
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        async function loadData() {
            const { headers, posts } = await queryPosts(Rules.top50posts);

            setHeaders(headers);
            setPosts(posts);
        }

        loadData();
    }, []);

    return (
        <div className="FirstTab">
            <PostList headers={headers} posts={posts} />
            <CSVLink
                className="App-link"
                filename="top50posts.csv"
                data={posts}
            >
                Export to CSV
            </CSVLink>
        </div>
    );
};

export default FirstTab;
