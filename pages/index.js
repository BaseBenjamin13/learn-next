import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Loader from '../components/Loader'
import toast from 'react-hot-toast'



export default function Home() {
  return (
    <div>
        <Loader show />

        <button onClick={() => toast.success('hello toast!')}>
            Toast Me
        </button>

        <Link prefetch={false} href={{
            pathname: '/[username]',
            query: { username: 'billybean'}
        }}>
            <h2>Billy's Profile</h2>
        </Link>
    </div>
  )
}
