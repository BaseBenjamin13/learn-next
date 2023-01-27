import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <Link prefetch={false} href={{
            pathname: '/[username]',
            query: { username: 'billybean'}
        }}>
            <h2>Billy's Profile</h2>
        </Link>
    </div>
  )
}
