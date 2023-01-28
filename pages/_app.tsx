import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '@/components/Navbar';
import { Toaster } from 'react-hot-toast'

import { GetServerSideProps } from 'next';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <NavBar />
            <Component {...pageProps} />
            <Toaster />
        </>
    )
}
