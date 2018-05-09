import React, { Component } from "react";
import moment from "moment";
import "moment/locale/da";
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'
import  {connect} from 'react-redux';


export default class CreateDate extends Component {
    state = {
      selectedDate: moment(),
      focused: false,
    };

  handleChange = (date) => {
    if(date){
    this.setState({
      selectedDate: date
    })
  }
  }

  onFocusChange = ({focused}) => {
    this.setState(() => ({focused:focused}));
  };

/* 
  handleDeleteDate(dateToRemove){
      this.setState((prevState)=> ({
      dates: prevState.dates.filter((date) => {
        return dateToRemove!==date.date;
      })
    }));
  } */

  onSubmit = (e) => {
    e.preventDefault();
    const formattedDate = (moment(this.state.selectedDate).format('dddd LL'));
    this.props.onSubmit({
      date: formattedDate[0].toUpperCase() + formattedDate.substr(1)
    })
  };

  render() {
    return (
      <div>
        <h1>Create Date</h1>
        <form onSubmit={this.onSubmit}>
          <SingleDatePicker
            date={this.state.selectedDate}
            onDateChange={this.handleChange}
            focused={this.state.focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
          />
          <button>Opret</button>
        </form> 
      </div>
    );
  }
}