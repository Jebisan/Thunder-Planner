import React from "react";
import Date from './Date';
import {connect} from 'react-redux';

 export const Dates = (props) => {
    return (
      <div>
      <h2>Dates</h2>        
      {
          props.dates.map((date) => 
            <Date key = {date.id} {...date}/>
          )
        }
      </div>
    );
  }

  const mapStateToProps = state => {
    return {
        dates: state.dates
    };
};
  export default connect (mapStateToProps)(Dates);