// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionList, arrowClicked} = props
  const {suggestion, id} = suggestionList

  const click = () => {
    arrowClicked(id)
  }

  return (
    <li className="suggestion-item">
      <p>{suggestion}</p>
      <button type="button" onClick={click} className="button-prop">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="button-prop"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
