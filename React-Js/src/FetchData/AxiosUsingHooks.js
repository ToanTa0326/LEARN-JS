import axios from 'axios'
import React, { useState, useEffect } from 'react'

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

const AxiosUsingHooks = (props) => {
  // setting initial state and method to update state
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const url = 'https://restcountries.com/v2/all'
    try {
      const response = await axios.get(url)
      const data = await response.data
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='App'>
      <h1>Fetching Data Using Hook</h1>
      <h1>Calling API</h1>
      <div>
        <p>There are {data.length} countries in the api</p>
        <div className='countries-wrapper'>
          {data.map((country,index) => (
            <Country key={index} country={country} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AxiosUsingHooks