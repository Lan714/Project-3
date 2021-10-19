import { useState } from 'react'
import UserAPI from '../../utils/UserAPI'
import HistoryAPI from '../../utils/HistoryAPI'
import Table from 'react-bootstrap/Table'

const LeaderBoardTableForm = () => {
	return (
		<Table striped bordered hover variant="dark">
			<thead>
				<tr>
					<th>#</th>
					<th>Username</th>
					<th>Profit</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>Lan</td>
					<td>$789</td>
				</tr>
				<tr>
					<td>2</td>
					<td>Jaeyeon</td>
					<td>$456</td>
				</tr>
				<tr>
					<td>3</td>
					<td>Shannon</td>
					<td>$123</td>
				</tr>
			</tbody>
		</Table>
	)
}

export default LeaderBoardTableForm
