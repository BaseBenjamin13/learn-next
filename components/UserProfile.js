
export default function UserProfile({ user }) {
    console.log(`user photoURL ${user.photoURL}`)
  return (
    <div className="box-center">
        <img src={user.photoURL || '/B.png'} className="card-img-center" />
        <p>
            <i>@{user.username}</i>
        </p>
        <h1>{user.displayName || 'Anonymous User'}</h1>
    </div>
  )
}


