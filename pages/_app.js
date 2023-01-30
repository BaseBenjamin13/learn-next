import '../styles/globals.css'
import { AppProps } from 'next/app'
import NavBar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';

import { useUserData } from '../lib/hooks';

export default function App({ Component, pageProps }, AppProps) {

    const userData = useUserData();

    return (
        <UserContext.Provider value={{user: userData.user, username: userData.username}}>
            <NavBar />
            <Component {...pageProps} />
            <Toaster />
        </UserContext.Provider>
    )
}
