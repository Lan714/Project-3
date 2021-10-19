import React, { useState } from 'react'
import UserAPI from '../../utils/UserAPI'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';


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
				if (token) {
					localStorage.setItem('token', token)
					setUserState({ ...userState, name: '', email: '', username: '', password: '' })
					window.location = '/'
				}
				else {
					alert('User unable to login idk why')
				}
			})
			.catch(err => console.error(err))
	}

	return (
		<Form>
			<Form.Group className="mb-3" controlId="username">
				<Form.Label>Username</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter your username"
					name="username"
					value={userState.username}
					onChange={handleInputChange} />
			</Form.Group>
			<Form.Group className="mb-3" controlId="password">
				<Form.Label>Password</Form.Label>
				<Form.Control
					type="password"
					placeholder="Enter your password"
					name="password"
					value={userState.password}
					onChange={handleInputChange} />
			</Form.Group>
			<Button
				variant="dark"
				type="submit"
				onClick={handleLoginUser} >
				Sign In
			</Button>
		</Form>
	)

}
const ExampleToast = ({ children }) => {
	const [show, toggleShow] = useState(true);
  
	return (
	  <>
		{!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
		<Toast show={show} onClose={() => toggleShow(false)}>
		  <Toast.Header>
			<strong className="mr-auto">React-Bootstrap</strong>
		  </Toast.Header>
		  <Toast.Body>{children}</Toast.Body>
		</Toast>
	  </>
	);
  };
  
  const App = () => (
	<Container className="p-3">
	  <Jumbotron>
		<h1 className="header">Welcome To React-Bootstrap</h1>
		<ExampleToast>
		  We now have Toasts
		  <span role="img" aria-label="tada">
			🎉
		  </span>
		</ExampleToast>
	  </Jumbotron>
	</Container>
  );

export default SignInForm
