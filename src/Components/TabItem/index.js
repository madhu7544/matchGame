import './index.css'

const TabItem = props => {
  const {isActive, tabDetails, updateTab} = props
  const {displayText, tabId} = tabDetails

  const Active = isActive ? 'btn-active' : ''

  const updateTabImg = () => {
    updateTab(tabId)
  }
  return (
    <li>
      <button
        type="button"
        className={`tab-heading ${Active}`}
        onClick={updateTabImg}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
