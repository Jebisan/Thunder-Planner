import jobsReducer from '../../reducers/jobs';
import jobs from '../fixtures/jobs';

test ('Should set default state', () => {
    const state = jobsReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test ('Should remove job by id' , () => {
    const action = {
        type: 'REMOVE_JOB',
        id: jobs[1].id
    };
    const state = jobsReducer(jobs, action);
    expect(state).toEqual([jobs[0], jobs[2]]);
});


test ('Should not remove job if id not found' , () => {
    const action = {
        type: 'REMOVE_JOB',
        id: '-1' 
    };
    const state = jobsReducer(jobs, action);
    expect(state).toEqual(jobs);
});

test ('Should add a job ' , () => {
const job = {
    id: '2244',
    name: 'Jebi 24 års',
   date: '8. Januar 2019',
   info: 'Pris: 3000 kr'
  };
    const action = {
        type: 'ADD_JOB', 
        job
    };
    const state = jobsReducer(jobs, action);
    expect(state).toEqual([...jobs, job]);
});

test('Should edit a job', () => {
  const info = "Pris: 10.000 kr";
  const action = {
      type: 'EDIT_JOB', 
      id: jobs[2].id, 
      updates: {
          info
        }
    };
    const state = jobsReducer(jobs, action);
    expect(state[2].info).toBe(info);
});

test('Should NOT edit a job if ID not found', () => {
    const info = "Pris: 10.000 kr";
    const action = {
        type: 'EDIT_JOB', 
        id: '9999', 
        updates: {
            info
          }
      };
      const state = jobsReducer(jobs, action);
      expect(state).toEqual(jobs);
  });