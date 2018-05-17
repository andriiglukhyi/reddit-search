import React, { Component } from 'react'
import MainPage from './main_page/main_page'
import RedditSearch from './SearchForm/search-form'
import SearchResultList from './SearchResultList/search-result'
import './App.css'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: undefined,
    }
  }

  render() {
    return (
      <div className="App">
        <MainPage/>
        <RedditSearch setAppState={this.setState.bind(this)}/>

        { this.state.results ?
          <SearchResultList results={this.state.results} />
          :
          undefined
        }

      </div>
    )
  }
}

export default App