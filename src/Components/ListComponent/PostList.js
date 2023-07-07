import './PostList.css';

const Post = ({ post }) => {
    const { title, privacy, likes, views, comments, timestamp } = post;

    return (
        <tr>
            <td>{title}</td>
            <td>{privacy}</td>
            <td>{likes}</td>
            <td>{views}</td>
            <td>{comments}</td>
            <td>{timestamp}</td>
        </tr>
    );
};

const PostTable = ({ headers, posts }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    {headers.map((header, i) => (
                        <th key={i}>{`${header[0].toUpperCase()}${header
                            .slice(1)
                            .toLowerCase()}`}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {posts.map((post, i) => (
                    <Post post={post} key={i} />
                ))}
            </tbody>
        </table>
    );
};

const PostList = ({ headers, posts, groupBy }) => {
    if (groupBy) {
        const groups = Object.keys(posts);

        return (
            <div>
                {groups.map((group) => (
                    <PostTable headers={headers} posts={posts[group]} />
                ))}
            </div>
        );
    }

    return (
        <div>
            <PostTable headers={headers} posts={posts} />
        </div>
    );
};

export default PostList;
