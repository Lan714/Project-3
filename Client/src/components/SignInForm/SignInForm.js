import { useState } from 'react'
import UserAPI from '../../utils/UserAPI'
import Button from '@mui/material/Button'

const SignInForm = () => {
	const [userState, setUserState] = useState({
		username: '',
		password: ''
	})

	const handleInputChange = ({ target: { name, value } }) => setUserState({ ...userState, [name]: value })

	const handleLoginUser = event => {
		event.preventDefault()
		UserAPI.login(userState)
			.then(({ data: token }) => {
				localStorage.setItem('token', token)
				setUserState({ ...userState, name: '', email: '', username: '', password: '' })
				window.location = '/'
			})
			.catch(err => console.error(err))
	}

	return (
		<>
			<Button variant="contained">Hello World Register</Button>
		</>
	)

}

export default SignInForm
