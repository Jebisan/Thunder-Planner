import React from 'react';
import CreateJob from './CreateJob'
import {connect} from 'react-redux';
import {addJob} from '../../actions/jobs';

const JobPage = (props) => 
(
        <div className="NewPost">
       <CreateJob
       onSubmit={(job) => {
        props.dispatch(addJob(job));
        props.history.push('/');
       }}
       />
    
    </div>
)


export default connect()(JobPage);
