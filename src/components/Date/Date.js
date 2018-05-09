import React from "react";
import {connect} from 'react-redux';
import {removeDate} from '../../actions/dates';

  const Date = ({dispatch, id, date}) => {
     return (
      <div>
         <p>{date}</p>
         <button onClick={() => {
           dispatch(removeDate({id}));
         }}>Remove</button>
        </div>
      );
  }
  export default connect()(Date); 