import { useState } from 'react'
import UserAPI from '../../utils/UserAPI'

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
			testing Register Form page
		</>
	)
}

export default RegisterForm
