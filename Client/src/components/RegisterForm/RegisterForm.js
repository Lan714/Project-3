import { useState } from 'react'
import UserAPI from '../../utils/UserAPI'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const RegisterForm = () => {
	const [userState, setUserState] = useState({
		name: '',
		email: '',
		username: '',
		password: ''
	})


	const handleInputChange = ({ target: { name, value } }) => setUserState({ ...userState, [name]: value })

	const handleRegisterUser = event => {
		event.preventDefault()
		UserAPI.register(userState)
			.then(() => {
				alert('User Registered!')
				setUserState({ ...userState, name: '', email: '', username: '', password: '' })
			})
			.catch(err => console.error(err))
	}

	return (
		<>
			<Box
				component="form"
				sx={{
					'& > :not(style)': { m: 1, width: '25ch' },
					backgroundColor: 'gray'
				}}
				noValidate
				autoComplete="off"
			>
				Register Part

				<TextField id="filled-basic" label="Filled" variant="filled" />

				<TextField id="standard-basic" label="name" name="name" variant="standard" value={userState.name} onChange={handleInputChange} />
				<TextField id="standard-basic" label="email" name="email" variant="standard" value={userState.email} onChange={handleInputChange} />
				<TextField id="standard-basic" label="username" name="username" variant="standard" value={userState.username} onChange={handleInputChange} />
				<TextField id="standard-basic" label="password" name="password" variant="standard" value={userState.password} onChange={handleInputChange} />
				<Button type="submit" onClick={handleRegisterUser}>Register</Button>
			</Box>
		</>
	)
}

export default RegisterForm
