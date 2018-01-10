import React, { Component } from 'react'
import { Link } from 'react-router'
import House  from './House'
import SearchBar  from './SearchBar'

export default function IndexHouse({ history, allHouses, deleteHouse, editHouse, updateSearchFilter, selectedFilter, handleChange, searchTerm, filteredHouses }) {
  const filterList = ['mls_num', 'date_listed', 'city', 'state', 'zipCode', 'bedrooms', 'bathrooms', 'squareFeet', 'no filter']
  const houses = filteredHouses ? filteredHouses : allHouses
  return (
    <div>
      <SearchBar filterList={filterList} updateSearchFilter={updateSearchFilter} selectedFilter={selectedFilter} handleChange={handleChange} searchTerm={searchTerm}/>
      {
        houses.map((house,i)=>
          <House key={i} idx={i} house={house} editHouse={editHouse} deleteHouse={deleteHouse} history={history} />
        )
      }
    </div>
  )
}

