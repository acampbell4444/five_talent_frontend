import IndexHouse from '../components/IndexHouse'
import { connect } from 'react-redux'
import { removeHouse, updateSearchToggle, getAllHouses, loadAllHouses, loadFilteredHouses, setSelectedUpdate } from '../reducers/house'
import { Field, reduxForm } from 'redux-form'
 
let allHouses, selectedFilter, searchTerm
const mapStateToProps = state => {
  let filteredHouses = state.house.filteredHouses
  allHouses = state.house.allHouses
  selectedFilter = state.house.selectedSearchToggle
  searchTerm = state.form ? state.form.IndexSearch ? state.form.IndexSearch.values ? state.form.IndexSearch.values.search ? state.form.IndexSearch.values.search : '' : '' : '' : ''
  return {
    allHouses,
    selectedFilter,
    searchTerm,
    filteredHouses
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  	editHouse(id) {
  	  const house=allHouses.filter(house => house._id==id)
  	  dispatch(setSelectedUpdate(house))
    },
    deleteHouse(id) {
      dispatch(removeHouse(id))
      console.log('Removed House with ID #'+id)
    },
    handleChange(sTerm) {
      let filteredHouses=allHouses.filter((house, idx) => {
      	if(!selectedFilter||selectedFilter=='no filter'){return true}
        return house[selectedFilter]==sTerm
      })
      dispatch(loadFilteredHouses(filteredHouses))
    },
    updateSearchFilter(item){
    	dispatch(updateSearchToggle(item))
    }
})

const IndexSearch = reduxForm({
  form: 'IndexSearch'
})(IndexHouse)


export default connect(mapStateToProps, mapDispatchToProps)(IndexSearch)