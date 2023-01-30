import React from 'react'
import { auth } from '../lib/firebase';

export default function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}
