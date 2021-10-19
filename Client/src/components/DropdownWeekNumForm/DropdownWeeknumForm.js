import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

const DropdownWeeknumForm = ({
	weekNum
}) => {
	return (
		<Dropdown.Item href={"/"}>{weekNum}</Dropdown.Item>
	)
}

export default DropdownWeeknumForm
