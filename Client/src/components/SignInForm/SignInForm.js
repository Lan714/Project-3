import { useState } from 'react'
import UserAPI from '../../utils/UserAPI'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

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
			<Box
				component="form"
				sx={{
					'& > :not(style)': { m: 1, width: '25ch' },
					backgroundColor: 'gray'
				}}
				noValidate
				autoComplete="off"
			>
				Login Part

				<TextField id="username" label="username" name="username" variant="standard" value={userState.username} onChange={handleInputChange} />
				<TextField id="password" label="password" name="password" variant="standard" value={userState.password} onChange={handleInputChange} />
				<Button type="submit" onClick={handleLoginUser}>Login</Button>
			</Box>
		</>
	)

}

export default SignInForm
