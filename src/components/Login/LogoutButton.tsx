import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'react-bootstrap'


const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0()
  return (
    <>
    {isAuthenticated && (
    <Button className='px-1' variant="danger" onClick={() => logout()}>
        Logout
    </Button>
    )}
    </>
  )
}

export default LogoutButton