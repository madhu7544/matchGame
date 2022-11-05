import './index.css'

const Navbar = props => {
  const {score, isTimer} = props
  return (
    <nav className="navbar-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="logo"
      />
      <ul className="score-section">
        <li>
          <p className="score">Score: {score}</p>
        </li>

        <li className="timer-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="timer-label">{isTimer} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
