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
        <h2 className="text-4xl text-black font-blod text-center sm:text-left">{user?.name}</h2>
        <h3 className='text-center sm:text-left'>Nickname: {user?.nickname}</h3>
        <p className='text-center sm:text-left'>{user?.email}</p>
        <div className='text-center sm:text-left'>
        <h2>⬇️</h2>
        <LogoutButton />
        </div>
        </Tilt>   
    ) || 
    !isAuthenticated && (
      <div className='text-center sm:text-left'>
       <h1 className='rounded-full py-2 font-semibold bg-white bg-opacity-10 items-center group focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2'>You Are Not Logged In, Please Login!</h1>
       <h2>⬇️</h2>
       <div className='rounded-full px-3 py-2 font-semibold bg-white bg-opacity-10  items-center group focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2'>
       <LoginButton />
       </div>
      </div>
     )}
    </>
  )   
}

export default Profile