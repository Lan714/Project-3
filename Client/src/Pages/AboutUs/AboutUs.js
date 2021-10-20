import { useState, useEffect } from 'react'
import UserAPI from '../../utils/UserAPI'
import Button from 'react-bootstrap/Button'
import Navbar from '../../components/Navbar'
import './AboutUs.css'

const AboutUs = () => {
	const handleSignOut = () => {
		localStorage.removeItem('token')
		window.location = '/signIn'
	}

	return (
		<div className="aboutUsPg">
			<Navbar />
			<div className="pgContent">
				About Us Page
			<Button onClick={handleSignOut}>Logout</Button>
			</div>	
		</div>
	)
}

export default AboutUs