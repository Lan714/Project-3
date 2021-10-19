import { useState, useEffect } from 'react'
import UserAPI from '../../utils/UserAPI'
import Button from 'react-bootstrap/Button'
const Leaderboard = () => {
	const handleSignOut = () => {
		localStorage.removeItem('token')
		window.location = '/signIn'
	}

	return (
		<>
			Leaderboard Page
			<Button onClick={handleSignOut}>Logout</Button>
		</>
	)
}

export default Leaderboard