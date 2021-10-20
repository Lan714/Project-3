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
import Table from 'rc-table'
import './History.css'

const columns = [
	{
		title: 'Overview',
		dataIndex: 'Overview',
		key: 'Overview',
		width: 100,
	},
	{
		title: 'Cash Balance',
		dataIndex: 'cash_balance',
		key: 'cash_balance',
		width: 100,
	},
	{
		title: 'Coin Balance',
		dataIndex: 'coin_balance',
		key: 'coin_balance',
		width: 200,
	},
	{
		title: 'Profit',
		dataIndex: 'profit',
		key: 'profit',
		width: 200,
	}
];

const History = () => {
	const [historyState, setHistoryState] = useState({
		historys: []
	})

	const [overviewState, setOverviewState] = useState({
		cash_balance: '',
		coin_balance: '',
		profit: ''
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
						<Table columns={columns} data={ } />
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