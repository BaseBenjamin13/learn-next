
import { useContext } from 'react';
import { UserContext } from '../../lib/context';

export default function UserProfilePage({ }) {
    const { user, username } = useContext(UserContext);
    return (
        <main>
            <h1>Users Profile Page</h1>
            <h2>Hello {username[0].toUpperCase()}{username.substring(1)}</h2>
        </main>
    )
}