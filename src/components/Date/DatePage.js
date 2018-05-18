import React from 'react';
import CreateDate from './CreateDate'
import {connect} from 'react-redux';
import {addDate} from '../../actions/dates';
import Dates from './Dates'


export class DatePage extends React.Component {
    onSubmit = date => {
        this.props.onSubmit(date);
    };
    render () {
        return (<div>
        <CreateDate onSubmit = {this.onSubmit}/>
        <Dates/>
     </div>
    )}
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (date) => dispatch(addDate(date))
});

export default connect(undefined, mapDispatchToProps)(DatePage);