import uuid from 'uuid';

// ADD_DATE
export const addDate = (
    {
      date = 0
    } = {}
  ) => ({
    type: 'ADD_DATE',
    date: {
      id: uuid(),
     date
    }
  });
  
  // REMOVE_DATE
  export const removeDate = ({ id } = {}) => ({
    type: 'REMOVE_DATE',
    id
  });