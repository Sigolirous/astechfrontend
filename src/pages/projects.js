import React from 'react';
import queryString from 'query-string'
import ShowAll from './nested/allProjects'
import ShowOne from './nested/oneProject'
export default class PersonList extends React.Component {
  render() {
    const url = this.props.location.search;
    const params = queryString.parse(url);
    if (params.id){
      return(
        <ShowOne id={params.id}/>
      )
    }else{
        return (
          <ShowAll/>
        )
      }
    }
}