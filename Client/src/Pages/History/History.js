import { useState, useEffect } from 'react'
import UserAPI from '../../utils/UserAPI'
import HistoryAPI from '../../utils/HistoryAPI'
import Button from 'react-bootstrap/Button'
import Navbar from '../../components/Navbar'
import './History.css'

const History = () => {
	const handleSignOut = () => {
		localStorage.removeItem('token')
		window.location = '/signIn'
	}

	return (
		<div className="transactionsPg">
			<Navbar />
			<div className="pgContent">
				History Page
			<Button onClick={handleSignOut}>Logout</Button>
			</div>	
		</div>
	)
}

export default History