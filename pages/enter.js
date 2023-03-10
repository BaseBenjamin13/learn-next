
import { auth, googleAuthProvider } from '../lib/firebase';
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import UsernameForm from '../components/UsernameForm';
import SignOutButton from '../components/SignOutButton';


export default function EnterPage(props) {

    const { user, username } = useContext(UserContext);
    return (
        <main>
            {user ? 
                !username ? <UsernameForm /> : <SignOutButton /> 
                : 
                <SignInButton />
            }
        </main>
    )
}



function SignInButton() {
    const signInWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider);
    }
    return (
        <button className="btn-google" onClick={signInWithGoogle}>
            <img src={'/google.png'} /> Sign in with Google
        </button>
    )
}

