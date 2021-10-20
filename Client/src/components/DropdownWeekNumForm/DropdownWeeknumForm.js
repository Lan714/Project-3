import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

const DropdownWeeknumForm = ({
	weekNum,
	getfunction
}) => {
	return (
		<Dropdown.Item onClick={() => getfunction(weekNum)}>{weekNum}</Dropdown.Item>
	)
}

export default DropdownWeeknumForm
