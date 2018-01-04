import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import {required, maxLength15, maxLength30, number, zipCode} from './frontEndValidations'
export const EditHouse = ({ handleSubmit, pristine, reset, submitting, valid, houseToEdit}) => {
    return (
        <div className='container'>
          <h1>Edit Your Listing</h1>
          <form onSubmit={handleSubmit}>
            <Field name="mls_num" type="text" component={renderField} val={houseToEdit.mls_num} label="MLS #" validate={[ required, maxLength15, number ]} initialValue={22} />
            <Field name="street1" type="text" component={renderField} val={houseToEdit.street1} label="Street1" validate={[ required, maxLength30 ]}/>
            <Field name="street2" type="text" component={renderField} val={houseToEdit.street2} label="Street2" validate={[ required, maxLength30 ]}/>
            <Field name="city" type="text" component={renderField} val={houseToEdit.city} label="City" validate={[ required, maxLength15 ]}/>
            <Field name="stateName" type="text" component={renderField} val={houseToEdit.stateName} label="State" validate={[ required, maxLength15 ]}/>
            <Field name="zipCode" type="text" component={renderField} val={houseToEdit.zipCode}label="ZipCode" validate={[ required, zipCode ]}/>
            <Field name="neighborhood" type="text" component={renderField} val={houseToEdit.neighborhood} label="neighborhood" validate={[ maxLength15 ]}/>
            <Field name="sales_price" type="text" component={renderField} val={houseToEdit.sales_price} label="Sales Price" validate={[ required, number ]}/>
            <Field name="date_listed" type="date" component={renderField} val={houseToEdit.date_listed} label='Date Listed' />
            <Field name="bedrooms" type="text" component={renderField} val={houseToEdit.bedrooms} label="Number of Bedrooms" validate={[ number ]}/>
            <Field name="bathrooms" type="text" component={renderField}  val={houseToEdit.bathrooms} label="Number of Bathrooms" validate={[ number ]}/>
            <Field name="photo" type="text" component={renderField} val={houseToEdit.photo} label="PhotoURL" />
            <Field name="squareFeet" type="text" component={renderField} val={houseToEdit.squareFeet} label="SquareFeet" validate={[ number ]}/>
            <Field name="description" type="text" component={renderField} val={houseToEdit.description} label="description" validate={[ required ]}/>
            <button type="submit" className='btn btn-success'>Submit</button>
          </form>
        </div>
    )
  }

const renderField = ({val, input, label, type, meta: { touched, error, warning } }) => (
  <div className='jumbotron'>
    <div className='row'>
      <div className='col-sm-6'>{label} </div>
        <div className='col-sm-6'><input {...input} placeholder={label} type={type} value={val}  /></div>
      <div>
        {touched && ((error && <span className='text-danger'>{error}</span>) || (warning && <span className='text-danger'>{warning}</span>))}
      </div>
    </div>
  </div>
)
