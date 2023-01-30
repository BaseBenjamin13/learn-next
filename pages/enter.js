
import { auth, googleAuthProvider } from '../lib/firebase';
import { useContext } from 'react';
import { UserContext } from '../lib/context';


export default function EnterPage(props) {

    const { user, username } = useContext(UserContext);
    console.log(user)
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
function SignOutButton() {
    return <button onClick={() => auth.signOut()}>Sign Out</button>
}
function UsernameForm() {
    return (
        <>
            <h1>Username Form</h1>
        </>
    )
}