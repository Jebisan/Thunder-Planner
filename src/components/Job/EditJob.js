import React from 'react';
import {connect} from 'react-redux';
import CreateJob from './CreateJob';
import {editJob, removeJob} from '../../actions/jobs';

export class EditJob extends React.Component {
    onSubmit = (job) => {
        this.props.editJob(this.props.job.id, job);
        this.props.history.push('/');

    }

    onRemove = () => {
        this.props.removeJob({id: this.props.job.id});
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
    editJob: (id, job) => dispatch(editJob(id, job)),
    removeJob: (data) => dispatch(removeJob(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditJob);
