import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'

class IndexHouse extends Component {

  constructor(props) {
      super(props)
      this.state = {}
    }; 
    render() {
      const { history, allHouses, deleteHouse, editHouse, updateSearchFilter, selectedFilter, handleChange, searchTerm, filteredHouses } = this.props
      const filterList = ['mls_num', 'date_listed', 'city', 'state', 'zipCode', 'bedrooms', 'bathrooms', 'squareFeet', 'no filter']
      let houses = filteredHouses ? filteredHouses : allHouses
      return (
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6'>
              <h1>All Houses</h1>
              <button className='btn btn-success' onClick={e => {e.preventDefault(); window.location.href='/add-house'}}>Add House</button>
            </div>
            <div className='col-sm-6'>
              <h3>Search By</h3>
              <form> 
                <div className="btn-group" role="group" aria-label="Basic example">
                {
                  filterList.map((item, index) => (
                    <span>
                    <button type="button"
                      key='index' 
                      className="btn btn-secondary"
                      onClick= {e => {e.preventDefault(); updateSearchFilter(item)}}
                    >{item}
                    </button>
                    </span>

                  ))
                }
                </div>
                <Field name="search" type="text" component={renderField} label={selectedFilter} onChange={handleChange(searchTerm)}/>
              </form>
            </div>
          </div>
          {
            houses.map((house,index)=>
              <div className='well' key={index}>
                <div className='row'>
                  <div className='col-sm-6'>
                    <p>MLS # {house.mls_num}</p>
                    <p>Street 1: {house.street1}</p>
                    <p>Street 2: {house.street2}</p>
                    <p>City: {house.city}</p>
                    <p>State: {house.stateName}</p>
                    <p>ZipCode: {house.zipCode}</p>
                    <p>Neighborhood: {house.neighborhood}</p>
                    <p>Sales Price: ${house.sales_price}</p>
                    <p>Date Listed: {house.date_listed}</p>
                    <p>Bedrooms: {house.bedrooms}</p>
                    <p>Bathrooms: {house.bathrooms}</p>
                    <p>Photo: {house.photo}</p>
                    <p>SquareFeet: {house.squareFeet}</p>
                    <p>Description: {house.description}</p>
                  </div>
                  <div className='col-sm-3'>
                    {house.photo&&(<img src={house.photo} className='img-thumbnail' />)}
                    {!house.photo&&(<img src="https://i.pinimg.com/736x/47/b9/7e/47b97e62ef6f28ea4ae2861e01def86c--my-dream-house-dream-big.jpg" className='img-thumbnail'/>)}
                  </div>
                  <div className='col-sm-3'>
                    <button className='btn btn-primary' onClick={e=>{e.preventDefault();  editHouse(house._id); history.push('/edit-house');}}>Edit</button>
                    <button className='btn btn-danger' onClick={e=>{e.preventDefault(); deleteHouse(house._id)}}>Delete</button>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      );
    }
  }

  const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className='jumbotron'>
    <div className='row'>
      <div className='col-sm-6'>{label} </div>
      {label==='description'&&(<div className='col-sm-6'><textarea {...input} placeholder={label} type={type}/></div>)}
      {label!=='description'&&(<div ><input {...input} placeholder={label} type={type}/></div>)}
      <div>
        {touched && ((error && <span className='text-danger'>{error}</span>) || (warning && <span className='text-danger'>{warning}</span>))}
      </div>
    </div>
  </div>
)

export default IndexHouse;
