import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faHome, faUsers, faTrophy, faSignOutAlt, faWallet } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">

      <ul className="navLi">

        <li className="navTog">
          <section className="navLink">
            <span id="navTitle">Project 3</span>
            <FontAwesomeIcon icon={faAngleDoubleRight} className="togIcon" />
          </section>
        </li>

        <li className="navTab">
          <a href="#" className="navLink">
            <FontAwesomeIcon icon={faHome} className="icon" />
            <span>Home</span>
          </a>
        </li>

        <li className="navTab">
          <a href="#" className="navLink">
            <FontAwesomeIcon icon={faWallet} className="icon" />
            <span>Transactions</span>
          </a>
        </li>

        <li className="navTab">
          <a href="#" className="navLink">
            <FontAwesomeIcon icon={faTrophy} className="icon" />
            <span>Leaderboard</span>
          </a>
        </li>

        <li className="navTab">
          <a href="#" className="navLink">
            <FontAwesomeIcon icon={faUsers} className="icon" />
            <span>About Us</span>
          </a>
        </li>

        <li className="navTab">
          <a href="#" className="navLink">
            <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
            <span>Log out</span>
          </a>
        </li>

      </ul>
    </div>
  )
}

export default Navbar