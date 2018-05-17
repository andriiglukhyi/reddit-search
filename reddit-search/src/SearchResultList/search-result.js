import React, { Component } from 'react'

 export default class SearchResultList extends Component {

  render() {
    let list = this.props.results.map(item => 
    <li><a href={item.data.url}><h3>{item.data.title}</h3><p>{item.data.ups}</p></a></li>)
    return (
      <div className="results">
        <ul>{list}</ul>
      </div>
    )
  }
}