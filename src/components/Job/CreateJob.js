import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

export default class CreateJob extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDate: props.job ? moment(props.job.date): moment(),
            cars: [],
            employees: [],
            focused: false,
            id: props.job ? props.job.id:'',
            name: props.job ? props.job.name:'',
            info: props.job ? props.job.info:''
            };
    }
        
/* 
       componentDidMount(){ 
        axios.get('http://api.thunder-power.dk/users').then(response => {
        this.setState({employees: response.data});
       // console.log('Employees found:',this.state.employees);
        })
        axios.get('https://thunder-planner.firebaseio.com/cars.json').then(response => {
            this.setState({cars: response.data});
            })
         } */

     
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


  onIDchange = (e) => {
      const id = e.target.value;
    this.setState(() => (
        {
            id
        }));
  };

  onEventNamechange = (e) => {
    const name = e.target.value;
  this.setState(() => (
      {
        name
      }));
};

onInfohange = (e) => {
    const info = e.target.value;
  this.setState(() => (
      {
          info
      }));
};

  onSubmit = (e) => {
    e.preventDefault();
    //const formattedDate = (moment(this.state.selectedDate).format('dddd LL'));
    this.props.onSubmit({
        id: this.state.id,
        name: this.state.name,
        date: this.state.selectedDate/*formattedDate[0].toUpperCase() + formattedDate.substr(1)*/,
        info: this.state.info
      
    })
  };


    render () {
        return (
            <div className="NewPost">
                <h1>Opret job</h1>  
                <form onSubmit={this.onSubmit}>
                <input type="number" placeholder='ID' autoFocus value={this.state.id} onChange ={this.onIDchange}/>
                <input type="text" placeholder='Event titel' value={this.state.name} onChange ={this.onEventNamechange}/>


                <SingleDatePicker
                date={this.state.selectedDate}
                onDateChange={this.handleChange}
                focused={this.state.focused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
              />

                 <textarea type="textfield" placeholder='Info'type="text" value={this.state.info} onChange ={this.onInfohange} />
            
               <select>  
              {this.state.employees.map(employee => (<option key= {employee.Nr}>{employee.Navn}</option>))}
             </select>

             <button>Opret Job</button>
             </form>

         
            </div>
        );
    }
}