import React from 'react';
import {connect} from 'react-redux';
import CreateJob from './CreateJob';
import {editJob, removeJob} from '../../actions/jobs';


const EditJob = (props) => {
return (
     <div>
    <CreateJob
    job = {props.job}
    onSubmit={(job) => {
        props.dispatch(editJob(props.job.id, job));
        props.history.push('/');

    }}
    />
    <button onClick={() => {
        props.dispatch(removeJob(props.job.id));
        props.history.push('/');
      }}>Remove</button>
      

     </div>
);
};

const mapStateToProps = (state, props) => {
    return {
        job: state.jobs.find((job) => job.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditJob);
