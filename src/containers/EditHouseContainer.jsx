import {EditHouse } from '../components/EditHouse'
import { connect } from 'react-redux'
import {updateHouse } from '../reducers/house'
import { reduxForm } from 'redux-form'

const mapStateToProps = state => {
  const houseToEdit  = state.house.houseToUpdate[0]
  return {
    houseToEdit
  }
}

const mapDispatchToProps = dispatch => ({
	handleSubmit(e) {
    e.preventDefault()
    const mls_num = e.target.mls_num.val
    const street1 = e.target.street1.val
    const street2 = e.target.street2.val
    const city = e.target.city.val
    const stateName = e.target.stateName.val
    const zipCode = e.target.zipCode.val
    const neighborhood = e.target.neighborhood.val
    const sales_price = e.target.sales_price.val
    const date_listed = e.target.date_listed.val
    const bedrooms = e.target.bedrooms.val
    const bathrooms = e.target.bathrooms.val
    const photo = e.target.photo.val
    const squareFeet = e.target.squareFeet.val
    const description = e.target.description.val
    dispatch(updateHouse(
    	{ mls_num, street1, street2, city, stateName, zipCode, neighborhood, sales_price, date_listed, bedrooms, bathrooms, photo, squareFeet, description })
    )
  }
})

const EditHouseForm = reduxForm({
  form: 'EditHouse'
})(EditHouse)

export default connect(mapStateToProps, mapDispatchToProps)(EditHouseForm)