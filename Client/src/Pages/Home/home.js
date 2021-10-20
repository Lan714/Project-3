import { useState, useEffect } from 'react'
import UserAPI from '../../utils/UserAPI'
import Button from 'react-bootstrap/Button'
import Navbar from '../../components/Navbar'
import './Home.css'

const Home = () => {
	const handleSignOut = () => {
		localStorage.removeItem('token')
		window.location = '/signin'
	}

	return (
		<div className="homePg">
			<Navbar />
			<div className="pgContent">
				Hello world
				<Button onClick={handleSignOut}>Logout</Button>
			</div>
		</div>
	)
}

export default Home