import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faHome, faUsers, faTrophy, faSignOutAlt, faWallet } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

	const history = useHistory()


	const handleSignOut = () => {
		localStorage.removeItem('token')
		window.location = '/signin'
	}


	return (
		<div className="sideNavbar">

			<ul className="navLi">

				<li className="navTog">
					<section className="navLink">
						<span className="navSpan" >Project 3</span>
						<FontAwesomeIcon icon={faAngleDoubleRight} style={{ color: "#3993CD" }} id="togIcon" />
					</section>
				</li>

				<li className="navTab">


					<div onClick={() => history.push('/')} className="navLink">
						<FontAwesomeIcon icon={faHome} className="icon" />
						<span className="navSpan">Home</span>
					</div>
				</li>

				<li className="navTab">
					<div onClick={() => history.push('/history')} className="navLink">
						<FontAwesomeIcon icon={faWallet} className="icon" />

						<span className="navSpan">History</span>

					</div>
				</li>

				<li className="navTab">

					<div onClick={() => history.push('/Leaderboard')} className="navLink">



						<FontAwesomeIcon icon={faTrophy} className="icon" />
						<span className="navSpan">Leaderboard</span>
					</div>
				</li>

				<li className="navTab">

					<div onClick={() => history.push('/Aboutus')} className="navLink">



						<FontAwesomeIcon icon={faUsers} className="icon" />
						<span className="navSpan">About Us</span>
					</div>
				</li>

				<li className="navTab">

					<div onClick={handleSignOut} className="navLink">

						<FontAwesomeIcon icon={faSignOutAlt} className="icon" />
						<span className="navSpan">Log out</span>
					</div>
				</li>

			</ul>
		</div>
	)
}

export default Navbar