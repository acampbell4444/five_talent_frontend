import React from 'react'

export default function House({idx, house, editHouse, deleteHouse, history}) {
  return (
      <div className='well' key={idx}>
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