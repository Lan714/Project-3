import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faHome, faUsers, faTrophy, faSignOutAlt, faWallet } from '@fortawesome/free-solid-svg-icons'
import {useHistory} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
<<<<<<< HEAD
  const history = useHistory()
=======

  const handleSignOut = () => {
    localStorage.removeItem('token')
    window.location = '/signin'
  }

>>>>>>> 1bdd4b396a7f291dbcacb4aba652e7cd879ca8ee
  return (
    <div className="sideNavbar">

      <ul className="navLi">

        <li className="navTog">
          <section className="navLink">
            <span className="navSpan" >Project 3</span>
            <FontAwesomeIcon icon={faAngleDoubleRight} style={{color: "#3993CD"}} id="togIcon" />
          </section>
        </li>

        <li className="navTab">
<<<<<<< HEAD
          <div onClick={() => history.push('/')} className="navLink">
=======
          <a href="/" className="navLink">
>>>>>>> 1bdd4b396a7f291dbcacb4aba652e7cd879ca8ee
            <FontAwesomeIcon icon={faHome} className="icon" />
            <span className="navSpan">Home</span>
          </div>
        </li>

        <li className="navTab">
          <div onClick={() => history.push('/history')} className="navLink">
            <FontAwesomeIcon icon={faWallet} className="icon" />
            <span className="navSpan">Transactions</span>
          </div>
        </li>

        <li className="navTab">
<<<<<<< HEAD
          <div onClick={() => history.push('/Leaderboard')} className="navLink">
=======
          <a href="/leaderboard" className="navLink">
>>>>>>> 1bdd4b396a7f291dbcacb4aba652e7cd879ca8ee
            <FontAwesomeIcon icon={faTrophy} className="icon" />
            <span className="navSpan">Leaderboard</span>
          </div>
        </li>

        <li className="navTab">
<<<<<<< HEAD
          <div onClick={() => history.push('/Aboutus')} className="navLink">
=======
          <a href="/aboutus" className="navLink">
>>>>>>> 1bdd4b396a7f291dbcacb4aba652e7cd879ca8ee
            <FontAwesomeIcon icon={faUsers} className="icon" />
            <span className="navSpan">About Us</span>
          </div>
        </li>

        <li className="navTab">
<<<<<<< HEAD
          <div onClick={() => history.push('/signIn')} className="navLink">
=======
          <a onClick={handleSignOut} className="navLink">
>>>>>>> 1bdd4b396a7f291dbcacb4aba652e7cd879ca8ee
            <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
            <span className="navSpan">Log out</span>
          </div>
        </li>

      </ul>
    </div>
  )
}

export default Navbar