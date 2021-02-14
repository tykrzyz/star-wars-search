import {Component} from 'react';
import { BASE_URL } from './config';

export default class SearchForm extends Component{
  render(){
    const handleSubmit = (e) =>{
      e.preventDefault();
      const searchTerm = e.target.searchbox.value;
      fetch(`${BASE_URL}/people/?search${searchTerm}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => {
        if(!res.ok){
          return res.json().then(e => console.error(e))
        }
        return res.json()
      }).then(json => {
        this.props.handleGetResults(json)
        return json;
      })
      .catch(error => console.log(error))
    }
    return(
      <form onSubmit = {handleSubmit}>
        <label htmlFor='search-box'>Search for a character: </label>
        <input type='text' name='searchbox'/>
        <button type='submit'>Search!</button>
      </form>
    )
  }
}