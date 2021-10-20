import { useState, useEffect } from 'react'
import UserAPI from '../../utils/UserAPI'
import HistoryAPI from '../../utils/HistoryAPI'
import Button from 'react-bootstrap/Button'
import Navbar from '../../components/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import OverviewForm from '../../components/OverviewForm'
import DropdownWeeknumForm from '../../components/DropdownWeekNumForm'

import './History.css'

const History = () => {
	const [historyState, setHistoryState] = useState({
		weekNumber: '',
		historys: []
	})

	const getHistory = (weekNum) => {
		HistoryAPI.getHistory(weekNum)
			.then(({ data }) => {
				console.log(data)
			})
	}

	useEffect(() => {
		HistoryAPI.getWeekNum()
			.then(({ data: historys }) => setHistoryState({ ...historyState, historys }))
			.catch(err => window.location = '/')
	}, [])

	return (
		<div className="historyPg">
			<Navbar />
			<div className="pgContent">
				<Container className="cont">
					<Row>
						<Dropdown>
							<Dropdown.Toggle variant="success" id="dropdown-basic">
								Choose week number to see
							</Dropdown.Toggle>
							<Dropdown.Menu>
								{
									historyState.historys.map((weekNumber) => (<DropdownWeeknumForm
										weekNum={weekNumber}
										getfunction={getHistory} />))
								}
							</Dropdown.Menu>
						</Dropdown>
					</Row>
					<Row>
						<OverviewForm />
					</Row>
					<Row>
						History Table
					</Row>
				</Container>
			</div>
		</div>
	)
}

export default History