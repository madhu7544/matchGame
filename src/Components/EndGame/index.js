import './index.css'

const EndGame = props => {
  const {score, onReset} = props

  const onClickReset = () => {
    onReset()
  }

  return (
    <div className="game-over-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p className="Your-score">YOUR SCORE</p>
      <h1 className="score-display">{score}</h1>
      <button className="play-again" type="button" onClick={onClickReset}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-image"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default EndGame
