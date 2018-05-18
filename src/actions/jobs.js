import uuid from 'uuid';
import database from '../firebase/firebase';
// ADD_JOB
export const addJob = (job) => ({
    type: 'ADD_JOB',
    job
  });

  

  export const startAddJob = (jobData = {}) => {
    return (dispatch) => {
      const {
        id = '0',
        jobNumber = '0',
        name ='Not set',
        date = 0,
        info = 'not set',
      } = jobData; 
      const job = {jobNumber, name, date, info};


     return database.ref('jobs').push(job).then((ref) => {
        dispatch(addJob({
          id: ref.key,
          ...job
        }));
        console.log('This is the ref key', ref.key);
      });
    };
  };
  
  
  // REMOVE_JOB
  export const removeJob = ({id} = {} ) => ({ 
    id,
    type: 'REMOVE_JOB',
  });


// EDIT_JOB
export const editJob = (id, updates) => (
  {
  type: 'EDIT_JOB',
  id,
  updates
});

//SET_JOBS
export const setJobs = (jobs) => ({
type: 'SET_JOBS', 
jobs
});

export const startSetJobs = () => {
  return (dispatch) => {
    return database.ref('jobs').once('value').then((snapshot) => {
      const jobs = [];

      snapshot.forEach((childSnapshot) => {
          jobs.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
      });
      
      dispatch(setJobs(jobs));
    });
  };
};

//REMOVE_JOB
export const startRemoveJob = ({id} = {}) => {
    return (dispatch) => {
      return database.ref(`jobs/${id}`).remove().then(() => {
        dispatch(removeJob({id}));
      });
  };
};

