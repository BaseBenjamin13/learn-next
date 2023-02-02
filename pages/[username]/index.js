
import { useContext } from 'react';
import { UserContext } from '../../lib/context';
import { getUserWithUsername, postToJSON } from '../../lib/firebase';
import SignOutButton from '../../components/SignOutButton';
import UserProfile from '../../components/UserProfile';
import PostFeed from '../../components/PostFeed';


export async function getServerSideProps({ query }) {
    const { username } = query;

    const userDoc = await getUserWithUsername(username);
    let user = null;
    let posts = null;

    if(userDoc){
        user = userDoc.data();
        const postsQuery = userDoc.ref
            .collection('posts')
            .where('published', '==', true)
            .orderBy('createdAt', 'desc')
            .limit(5);
        posts = (await postsQuery.get()).docs.map(postToJSON);
    }

    return {
        props: { user, posts },
    }
    
}

export default function UserProfilePage({ user, posts }) {
    const { username } = useContext(UserContext);
    return (
        <main>
            <h1>Users Profile Page</h1>
            {/* {username && <h2>Hello {username[0].toUpperCase()}{username.substring(1)}</h2>} */}
            {user && <SignOutButton />}
            <UserProfile user={user} />
            <PostFeed posts={posts} />
        </main>
    )
}