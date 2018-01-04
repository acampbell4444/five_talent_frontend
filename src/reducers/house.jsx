import axios from 'axios'

const initState = {
  allHouses: [],
  lastHouse: {},
  justDeletedID: '',
  selectedSearchToggle: '',
  filteredHouses: '',
  houseToUpdate: {}
}

const reducer = (state=initState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case ADD_NEW_HOUSE:
    newState.lastHouse = action.house
    break

  case LOAD_ALL_HOUSES:
    newState.allHouses = action.houses
    break

    case LOAD_FILTERED_HOUSES:
    newState.filteredHouses = action.houses
    break

  case UPDATE_DELETED:
    newState.justDeletedID = action.id
    break

  case UPDATE_SEARCH_TOGGLE:
    newState.selectedSearchToggle = action.item
    break

    case SET_SELECTED_UPDATE:
    newState.houseToUpdate = action.house
    break

  default:
    return state
  }
  return newState
}

const ADD_NEW_HOUSE = 'ADD_NEW_HOUSE'
export const addNewHouse = house => ({type: ADD_NEW_HOUSE, house})

const LOAD_ALL_HOUSES = 'LOAD_ALL_HOUSES'
export const loadAllHouses = houses => ({type: LOAD_ALL_HOUSES, houses})

const LOAD_FILTERED_HOUSES = 'LOAD_FILTERED_HOUSES'
export const loadFilteredHouses = houses => ({type: LOAD_FILTERED_HOUSES, houses})

const UPDATE_DELETED = 'UPDATE_DELETED'
export const updateJustDeleted = ID => ({type: UPDATE_DELETED, ID})

const UPDATE_SEARCH_TOGGLE = 'UPDATE_SEARCH_TOGGLE'
export const updateSearchToggle = item => ({type: UPDATE_SEARCH_TOGGLE, item})

const SET_SELECTED_UPDATE = 'SET_SELECTED_UPDATE'
export const setSelectedUpdate = house => ({type: SET_SELECTED_UPDATE, house})

export const createNewHouse = house => dispatch => 
  axios.post('http://localhost:4200/houses/add/post', house)
    .then(res => {
      dispatch(addNewHouse(house))
      console.log('house', house)
  
    }
    )
    .catch(err => 
      console.error(err)
    )

export const getAllHouses = () => dispatch => 
  axios.get('http://localhost:4200/houses')
    .then(res => 
      dispatch(loadAllHouses(res.data))
    )
    .catch(err => 
      console.error(err)
    )

export const removeHouse = (id) => dispatch =>
  axios.get('http://localhost:4200/houses/delete/'+id)
  .then(res => {
    dispatch(updateJustDeleted(id))
    dispatch(getAllHouses())
  })
  .catch(err => 
      console.error(err)
  )

  export const updateHouse = (house, id) => dispatch =>
    axios.post('http://localhost:4200/houses/update/'+id, {house})
    .then(res =>
      alert('House Updated Successfully')
    )
    .catch(err => console.log(err))


export default reducer







