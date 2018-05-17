import React from 'react';
import CreateJob from './CreateJob'
import {connect} from 'react-redux';
import {addJob} from '../../actions/jobs';

export class JobPage extends React.Component { 
    onSubmit = (job) => {
        this.props.addJob(job);
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
    addJob: (job) => dispatch(addJob(job))
});


export default connect(undefined, mapDispatchToProps)(JobPage);
