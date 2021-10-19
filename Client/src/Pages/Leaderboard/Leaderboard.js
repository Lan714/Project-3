import { useState, useEffect } from 'react'
import HistoryElem from '../../components/HistoryElem'
import DropdownWeeknumForm from '../../components/DropdownWeekNumForm'
import LeaderBoardTableForm from '../../components/LeaderBoardTableForm/LeaderBoardTableForm'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import HistoryAPI from '../../utils/HistoryAPI'
import UserAPI from '../../utils/UserAPI'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'

const Leaderboard = () => {
	const [historyState, setHistoryState] = useState({
		weekNumber: '',
		historys: []
	})

	const getRankings = (weekNum) => {
		console.log(weekNum)
	}

	const handleSignOut = () => {
		localStorage.removeItem('token')
		window.location = '/signIn'
	}

	useEffect(() => {
		HistoryAPI.getWeekNum()
			.then(({ data: historys }) => setHistoryState({ ...historyState, historys }))
			.catch(err => window.location = '/')
	}, [])


	return (
		<>
			<Container className="cont">
				<Row>
					<Col sm={6}>
						<Dropdown>
							<Dropdown.Toggle variant="success" id="dropdown-basic">
								Choose week number to see
							</Dropdown.Toggle>
							<Dropdown.Menu>
								{
									historyState.historys.map((weekNumber) => (<DropdownWeeknumForm
										weekNum={weekNumber}
										getRankings={getRankings} />))
								}
							</Dropdown.Menu>
						</Dropdown>
					</Col>
				</Row>
				<Row>
					<LeaderBoardTableForm />
				</Row>
			</Container>
			<Button onClick={handleSignOut}>Logout</Button>
		</>
	)
}

export default Leaderboard