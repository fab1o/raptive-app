import { useEffect, useState } from 'react';

import { Rules } from '../../API/rules';
import { queryPosts } from '../../API/queryPosts';

import PostList from '../ListComponent/PostList';

const ThirdTab = (data) => {
    let [headers, setHeaders] = useState([]);
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        async function loadData() {
            const { headers, posts } = await queryPosts(
                Rules.topHeightestLowestViewPosts
            );

            setHeaders(headers);
            setPosts(posts);
        }

        loadData();
    }, []);

    return (
        <div className="ThirdTab">
            <PostList headers={headers} posts={posts} groupBy="true" />
        </div>
    );
};

export default ThirdTab;
