import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addDate, removeDate} from './actions/dates';
import {startSetJobs} from './actions/jobs';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

//ADD DATE
//const firstDate = store.dispatch(addDate({date: '5. Maj 2018'}));
//const secondDate = store.dispatch(addDate({date: '10. Maj 2018'}));

//const firstJob =     store.dispatch(addJob({id:'4224', name:'Søren 18 års', date:'9. Maj 2018', info:'Pris: 4000 kr'}));
//const secondJob =     store.dispatch(addJob({id:'3214', name:'Tønder Gymnasium', date:'20. April 2018', info:'Pris: 8000 kr'}));
//const thirdJob =     store.dispatch(addJob({id:'4334', name:'Strib Efterskole', date:'21. Juni 2018', info:'Pris: 2500 kr'}));


//REMOVE DATE
    //store.dispatch(removeDate({ id: firstDate.date.id }));
//     <button onClick={handlePrintReduxStore}>REDUX STORE</button>
const handlePrintReduxStore = () => {
    console.log(store.getState());
}

const jsx = (
    <div>
    <Provider store = {store}>
    <AppRouter/>
    </Provider> 
    </div>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetJobs()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});


