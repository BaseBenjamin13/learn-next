import React, { useContext} from 'react';
import Link from 'next/link';
import { UserContext } from '../lib/context';

export default function AuthCheck(props) {
    const { username } = useContext(UserContext);

  return username ?
        props.children : 
        props.fallback || 
        <Link href="/enter">
            <button style={{fontSize: "200%", color: "white", backgroundColor: "black"}}>
                You must be signed in
            </button>
        </Link>
}

