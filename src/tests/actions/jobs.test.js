import {addJob, editJob, removeJob} from '../../actions/jobs';
//JOB TESTS

test('should setup add job action object', () => {
    const job = {id:'3244', name: 'Christian 18 års',date: '13. Maj 2013',info: 'Pris: 4000 kr'};
    const action = addJob(job);
    expect(action).toEqual({
      type: 'ADD_JOB',
      job :{...job}
    } 
  )});
  
  test('should setup edit job action object', () => {
    const action = editJob('3224', {id:'3333', name: 'Anders 20 års',date: '13. Maj 2015',info: 'Pris: 8000 kr'});
    expect(action).toEqual({
      type: 'EDIT_JOB',
      id:'3224',
      updates :{id:'3333', name: 'Anders 20 års',date: '13. Maj 2015',info: 'Pris: 8000 kr'}
    } 
  )});
  
  
  
  test('should setup remove job action object', () => {
    const action = removeJob( '30' );
    expect(action).toEqual({
      id: '30', type: 'REMOVE_JOB'}
    )}
  );
  