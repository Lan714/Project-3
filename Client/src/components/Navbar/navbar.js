import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faHome, faUsers, faTrophy, faSignOutAlt, faWallet } from '@fortawesome/free-solid-svg-icons'
<<<<<<< HEAD
import {useHistory} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const history = useHistory()
=======
import { useHistory } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

  const history = useHistory()


  const handleSignOut = () => {
    localStorage.removeItem('token')
    window.location = '/signin'
  }


>>>>>>> 1a2f1f6ec87b0c7c0b35f33902d49f9c696932a6
  return (
    <div className="sideNavbar">

      <ul className="navLi">

        <li className="navTog">
          <section className="navLink">
            <span className="navSpan" >Project 3</span>
<<<<<<< HEAD
            <FontAwesomeIcon icon={faAngleDoubleRight} style={{color: "#3993CD"}} id="togIcon" />
=======
            <FontAwesomeIcon icon={faAngleDoubleRight} style={{ color: "#3993CD" }} id="togIcon" />
>>>>>>> 1a2f1f6ec87b0c7c0b35f33902d49f9c696932a6
          </section>
        </li>

        <li className="navTab">
<<<<<<< HEAD
=======


>>>>>>> 1a2f1f6ec87b0c7c0b35f33902d49f9c696932a6
          <div onClick={() => history.push('/')} className="navLink">
            <FontAwesomeIcon icon={faHome} className="icon" />
            <span className="navSpan">Home</span>
          </div>
        </li>

        <li className="navTab">
          <div onClick={() => history.push('/history')} className="navLink">
            <FontAwesomeIcon icon={faWallet} className="icon" />
<<<<<<< HEAD
            <span className="navSpan">Transactions</span>
=======

            <span className="navSpan">History</span>

>>>>>>> 1a2f1f6ec87b0c7c0b35f33902d49f9c696932a6
          </div>
        </li>

        <li className="navTab">
<<<<<<< HEAD
          <div onClick={() => history.push('/Leaderboard')} className="navLink">
=======

          <div onClick={() => history.push('/Leaderboard')} className="navLink">



>>>>>>> 1a2f1f6ec87b0c7c0b35f33902d49f9c696932a6
            <FontAwesomeIcon icon={faTrophy} className="icon" />
            <span className="navSpan">Leaderboard</span>
          </div>
        </li>

        <li className="navTab">
<<<<<<< HEAD
          <div onClick={() => history.push('/Aboutus')} className="navLink">
=======

          <div onClick={() => history.push('/Aboutus')} className="navLink">



>>>>>>> 1a2f1f6ec87b0c7c0b35f33902d49f9c696932a6
            <FontAwesomeIcon icon={faUsers} className="icon" />
            <span className="navSpan">About Us</span>
          </div>
        </li>

        <li className="navTab">
<<<<<<< HEAD
          <div onClick={() => history.push('/signIn')} className="navLink">
=======

          <div onClick={handleSignOut} className="navLink">

>>>>>>> 1a2f1f6ec87b0c7c0b35f33902d49f9c696932a6
            <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
            <span className="navSpan">Log out</span>
          </div>
        </li>

      </ul>
    </div>
  )
}

export default Navbar