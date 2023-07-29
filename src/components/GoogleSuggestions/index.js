// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onchangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  arrowClicked = id => {
    const {suggestionsList} = this.state

    const inputResult = suggestionsList.filter(
      eachResult => eachResult.id === id,
    )
    console.log(inputResult)

    this.setState({
      searchInput: inputResult,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResult = suggestionsList.filter(eachList =>
      eachList.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="google-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            onChange={this.onchangeSearchInput}
            alt="google logo"
            className="img"
          />
          <div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search"
              />

              <input
                type="search"
                onChange={this.onchangeSearchInput}
                placeholder="Search Google"
              />
            </div>
            <ul className="suggestionlist-container">
              {searchResult.map(eachSuggestion => (
                <SuggestionItem
                  suggestionList={eachSuggestion}
                  key={eachSuggestion.id}
                  arrowClicked={this.arrowClicked}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
