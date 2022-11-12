import { useAuth0 } from '@auth0/auth0-react'
import Tilt from "react-parallax-tilt"
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'
import { Button } from 'react-bootstrap'


const Profile = () => {
    const { user, isAuthenticated } = useAuth0()
  return (
    <>
    <br />
    {isAuthenticated && (
        <Tilt>
          <div className="mt-8 bg-white rounded-lg border border-gray-200 shadow-md">
        <img className='mx-auto' src={user?.picture} alt={user?.name} />
        <h2 className="text-4xl text-black font-blod text-center sm:text-left">{user?.name}</h2>
        <h3 className='text-center sm:text-left'>Nickname: {user?.nickname}</h3>
        <p className='text-center sm:text-left'>{user?.email}</p>
        <div className='text-center sm:text-left'>
        <h2>⬇️</h2>
        <Button variant="danger">
        <LogoutButton />
        </Button>
        </div>
        </div>
        </Tilt>   
    ) || 
    !isAuthenticated && (
      <div className='text-center sm:text-left'>
        <br />
       <h1 className='rounded-full py-2 font-semibold'>You Are Not Logged In, Please Login!</h1>
       <hr />
       <h2>⬇️</h2>
       <Button>
       <LoginButton />
       </Button>
      </div>
     )}
    </>
  )   
}

export default Profile