import {Component} from 'react';

export default class Results extends Component{
  render(){
    const list = this.props.results.map(result => {
      return <div>{result.name}</div>;
    })
    return(
      <div>
        {list}
      </div>
    )
  }
}