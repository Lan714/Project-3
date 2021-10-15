import { useState, useEffect } from 'react'
import UserAPI from '../../utils/UserAPI'
import Button from '@mui/material/Button'

const Home = () => {
	const handleSignOut = () => {
		localStorage.removeItem('token')
		window.location = '/signIn'
	}

	return (
		<>
			Hello world
			<Button onClick={handleSignOut}>Logout</Button>
		</>
	)
}

export default Home