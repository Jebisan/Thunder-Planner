import React from "react";
import { connect } from 'react-redux';
import Job from './Job';

export const Jobs = (props) => (
    <div className="NewPost">
    <h2>Jobs</h2>    
    {  
    props.jobs.lenght === 0 ? (
      <p>NO JOBS</p>
    ) : (
      props.jobs.map((job) => 
      <Job key = {job.id} {...job} />
    ))
  }
    
    </div>
    );

  

  const mapStateToProps = state => {
    return {
        jobs: state.jobs
    };
};
  export default connect (mapStateToProps)(Jobs);