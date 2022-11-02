import { useAuth0 } from '@auth0/auth0-react'
import Tilt from "react-parallax-tilt"
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'


const Profile = () => {
    const { user, isAuthenticated } = useAuth0()
  return (
    <>
    {isAuthenticated && (
        <Tilt>
        <img className='mx-auto' src={user?.picture} alt={user?.name} />
        <h2 className="text-4xl text-black font-blod text-center">{user?.name}</h2>
        <h3 className='text-center'>Nickname: {user?.nickname}</h3>
        <p className='text-center'>{user?.email}</p>
        <div className='text-center'>
        <h2>⬇️</h2>
        <LogoutButton />
        </div>
        </Tilt>   
    ) || 
    !isAuthenticated && (
      <div className='text-center'>
       <h1>You Are Not Logged In, Please Login!</h1>
       <h2>⬇️</h2>
       <LoginButton />
      </div>
     )}
    </>
  )   
}

export default Profile