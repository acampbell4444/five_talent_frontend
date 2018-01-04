import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import {required, maxLength15, maxLength30, number, zipCode} from './frontEndValidations'
export const AddHouse = ({ handleSubmit, pristine, reset, submitting, valid}) => {
    return (
        <div className='container'>
          <h1>Enter a New House to the Database</h1>
          <form onSubmit={handleSubmit}>
            <Field name="mls_num" type="text" component={renderField} label="MLS #" validate={[ required, maxLength15, number ]}/>
            <Field name="street1" type="text" component={renderField} label="Street1" validate={[ required, maxLength30 ]}/>
            <Field name="street2" type="text" component={renderField} label="Street2" validate={[ required, maxLength30 ]}/>
            <Field name="city" type="text" component={renderField} label="City" validate={[ required, maxLength15 ]}/>
            <Field name="stateName" type="text" component={renderField} label="State" validate={[ required, maxLength15 ]}/>
            <Field name="zipCode" type="text" component={renderField} label="ZipCode" validate={[ required, zipCode ]}/>
            <Field name="neighborhood" type="text" component={renderField} label="neighborhood" validate={[ maxLength15 ]}/>
            <Field name="sales_price" type="text" component={renderField} label="Sales Price" validate={[ required, number ]}/>
            <Field name="date_listed" type="date" component={renderField} label='Date Listed' />
            <Field name="bedrooms" type="text" component={renderField} label="Number of Bedrooms" validate={[ number ]}/>
            <Field name="bathrooms" type="text" component={renderField} label="Number of Bathrooms" validate={[ number ]}/>
            <Field name="photo" type="text" component={renderField} label="PhotoURL" />
            <Field name="squareFeet" type="text" component={renderField} label="SquareFeet" validate={[ number ]}/>
            <Field name="description" type="text" component={renderField} label="description" validate={[ required ]}/>
            <button type="submit" className='btn btn-success' disabled={!valid}>Submit</button>
          </form>
        </div>
    )
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