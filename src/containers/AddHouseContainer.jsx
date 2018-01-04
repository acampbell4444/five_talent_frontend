import {AddHouse } from '../components/AddHouse'
import { connect } from 'react-redux'
import { createNewHouse } from '../reducers/house'
import { reduxForm } from 'redux-form'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => ({
	handleSubmit(e) {
      e.preventDefault()
      const mls_num = e.target.mls_num.value
      const street1 = e.target.street1.value
      const street2 = e.target.street2.value
      const city = e.target.city.value
      const stateName = e.target.stateName.value
      const zipCode = e.target.zipCode.value
      const neighborhood = e.target.neighborhood.value
      const sales_price = e.target.sales_price.value
      const date_listed = e.target.date_listed.value
      const bedrooms = e.target.bedrooms.value
      const bathrooms = e.target.bathrooms.value
      const photo = e.target.photo.value
      const squareFeet = e.target.squareFeet.value
      const description = e.target.description.value
      dispatch(createNewHouse(
      	{ mls_num, street1, street2, city, stateName, zipCode, neighborhood, sales_price, date_listed, bedrooms, bathrooms, photo, squareFeet, description })
      )
      alert('You Created a New Listing!')
      window.location.href='/'
    }
})

const AddHouseForm = reduxForm({
  form: 'AddHouse'
})(AddHouse)

export default connect(mapStateToProps, mapDispatchToProps)(AddHouseForm)