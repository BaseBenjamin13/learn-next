import Link from "next/link";

export default function PostFeed({ posts }) {
    return (
        posts ? 
            posts.map((post) => {
                return <PostItem post={post} key={post.slug} />
                // return <PostItem post={post} key={post.slug} admin={admin}/>
            })
        : null
        
    )
}

function PostItem({ post, key, admin }){
    const wordCount = post?.content.trim().split(/\s+/g).length;
    const minutesToRead = (wordCount / 100 + 1).toFixed(0);
    return(
        <div className="card">
            <Link href={`/${post.username}`}>
                <a>
                    <strong>By @{post.username}</strong>
                </a>
            </Link>
    
            <Link href={`/${post.username}/${post.slug}`}>
                <h2>
                    <a>{post.title}</a>
                </h2>
            </Link>
    
            <footer>
                <span>
                    {wordCount} words. {minutesToRead} min read
                </span>
                <span className="push-left">💗 {post.heartCount || 0} Hearts</span>
            </footer>
        </div>
    )
}