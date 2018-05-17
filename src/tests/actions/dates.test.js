import { addDate, removeDate } from '../../actions/dates';

//DATE TESTS

test('should setup add date action object with provided values', () => {
  const date = {
    date: '8. Maj 2018'
  }
  const action = addDate(date); 
  expect(action).toEqual({
    type: 'ADD_DATE', 
    date: {
       id: expect.any(String), 
       ...date
      }}
  );
});



test('should setup remove date action object', () => {
  const action = removeDate({ id:'3' });
  expect(action).toEqual({
    type: 'REMOVE_DATE', 
    id: '3'
  });
});

