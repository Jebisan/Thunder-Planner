import React from 'react';
import {connect} from 'react-redux';
import CreateJob from './CreateJob';
import {startEditJob, startRemoveJob} from '../../actions/jobs';

export class EditJob extends React.Component {
    onSubmit = (job) => {
        this.props.startEditJob(this.props.job.id, job);
        this.props.history.push('/');

    }

    onRemove = () => {
        this.props.startRemoveJob({id: this.props.job.id});
        this.props.history.push('/');
    };

    render () {
        return (
    <div>
        <CreateJob
        job = {this.props.job}
        onSubmit={this.onSubmit}
    />
    <button onClick={this.onRemove}>Remove</button>
     </div>
        );
    }
} ;

const mapStateToProps = (state, props) => ({
        job: state.jobs.find((job) => job.id === props.match.params.id)
});


const mapDispatchToProps = (dispatch, props) => ({
    startEditJob: (id, job) => dispatch(startEditJob(id, job)),
    startRemoveJob: (data) => dispatch(startRemoveJob(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditJob);
