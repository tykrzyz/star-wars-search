import {Component} from 'react'
import SearchForm from './SearchForm'
import Results from './Results'
import './App.css';

export default class App extends Component{
  state = {
    people: []
  }

 
  render(){
    const handleGetResults = results => {
      this.setState({people: results});
  }
    return(
      <div>
        <header>
          <h1>Star Wars Search</h1>
        </header>
        <main>
          <SearchForm handleGetResults={handleGetResults}/>
          <Results results={this.state.people}/>
        </main>
      </div>
    )
  }
}

