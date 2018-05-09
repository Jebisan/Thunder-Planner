import uuid from 'uuid';

// ADD_JOB
export const addJob = (
    {
      id = uuid(),
      name ='Not set',
      date = 0,
      info = 'Not set',
    } = {}
  ) => ({
    type: 'ADD_JOB',
    job: {
      id,
      name,
     date,
     info,
    }
  });
  
  // REMOVE_JOB
  export const removeJob = ( id  = {}) => (
    {
    type: 'REMOVE_JOB',
    id
  });


// EDIT_JOB
export const editJob = (id, updates) => (
  {
  type: 'EDIT_JOB',
  id,
  updates
});
