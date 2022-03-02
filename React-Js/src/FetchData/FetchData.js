import React, { Component } from 'react'

const Country = ({ country: { name, flag, population } }) => {
    return (
      <div className='country'>
        <div className='country_flag'>
          <img src={flag} alt={name} />
        </div>
        <h3 className='country_name'>{name.toUpperCase()}</h3>
        <div className='country_text'>
          <p>
            <span>Population: </span>
            {population}
          </p>
        </div>
      </div>
    )
}

class FetchData extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    const url = 'https://restcountries.com/v2/all'
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({
          data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1>
        <div>
          <p>There are {this.state.data.length} countries in the api</p>
          <div className='countries-wrapper'>
            {this.state.data.map((country,index) => (
              <Country key={index} country={country} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default FetchData