import { motion } from 'framer-motion'
import React from 'react'
import Profile from '../components/Login/Profile'


const ProfilePage = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}>
    <Profile />
    </motion.div>
  )
}

export default ProfilePage