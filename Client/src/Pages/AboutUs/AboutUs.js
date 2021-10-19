import { useState, useEffect } from 'react'
import UserAPI from '../../utils/UserAPI'
import Button from 'react-bootstrap/Button'
const AboutUs = () => {
	const handleSignOut = () => {
		localStorage.removeItem('token')
		window.location = '/signIn'
	}

	return (
		<>
			About Us Page
			<Button onClick={handleSignOut}>Logout</Button>
		</>
	)
}

export default AboutUs