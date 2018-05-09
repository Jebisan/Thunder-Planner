import React from 'react';
import CreateDate from './CreateDate'
import {connect} from 'react-redux';
import {addDate} from '../../actions/dates';
import Dates from './Dates'

const DatePage = (probs) => 
(
        <div className="NewPost">
       <CreateDate
       onSubmit={(date) => {
        probs.dispatch(addDate(date));
       }}
       />
       <Dates className="NewPost"/>
    </div>
)

export default connect()(DatePage);