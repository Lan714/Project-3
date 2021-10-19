import { useState, useEffect } from 'react'
import UserAPI from '../../utils/UserAPI'
import HistoryAPI from '../../utils/HistoryAPI'
import Button from 'react-bootstrap/Button'
const History = () => {
	const handleSignOut = () => {
		localStorage.removeItem('token')
		window.location = '/signIn'
	}

	return (
		<>
			History Page
			<Button onClick={handleSignOut}>Logout</Button>
		</>
	)
}

export default History