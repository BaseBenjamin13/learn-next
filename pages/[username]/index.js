
import { useContext } from 'react';
import { UserContext } from '../../lib/context';
import SignOutButton from '../../components/SignOutButton';

export default function UserProfilePage({ }) {
    const { user, username } = useContext(UserContext);
    return (
        <main>
            <h1>Users Profile Page</h1>
            {username && <h2>Hello {username[0].toUpperCase()}{username.substring(1)}</h2>}
            {user && <SignOutButton />}
        </main>
    )
}