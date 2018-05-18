import React from 'react';
import CreateJob from './CreateJob'
import {connect} from 'react-redux';
import {startAddJob} from '../../actions/jobs';

export class JobPage extends React.Component { 
    onSubmit = (job) => {
        this.props.startAddJob(job);
        this.props.history.push('/');
    
};

render () {
    return (
        <div className="NewPost">
        <CreateJob
        onSubmit={this.onSubmit}
        />
     
     </div>
    );
}
}


const mapDispatchToProps = (dispatch) => ({
    startAddJob: (job) => dispatch(startAddJob(job))
});


export default connect(undefined, mapDispatchToProps)(JobPage);
