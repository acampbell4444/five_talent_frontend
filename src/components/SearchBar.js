import React from 'react'
import { Field } from 'redux-form'

export default function SearchBar({filterList, updateSearchFilter, selectedFilter, handleChange, searchTerm}) {
  return (
	<div className='flexbox'>
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
		        <span key={index}>
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
		    <Field name="search" type="text" component={renderField} label={selectedFilter} onChange={handleChange(searchTerm)} />
	    </form>
	  </div>
	</div> 
  )
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className='jumbotron'>
    <div className='row'>
      <div className='col-sm-6'>{label} </div>
      {label==='description'&&(<div className='col-sm-6'><textarea {...input} placeholder={label} type={type}/></div>)}
      {label!=='description'&&(<div ><input style={{'margin-left':'200px'}} {...input} placeholder={label} type={type}/></div>)}
      <div>
        {touched && ((error && <span className='text-danger'>{error}</span>) || (warning && <span className='text-danger'>{warning}</span>))}
      </div>
    </div>
  </div>
)
