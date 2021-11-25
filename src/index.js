import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Provider } from 'react-redux';
import App from './App';

import noteReducer from './reducers/noteReducer';
import filterReducer from './reducers/filterReducer';

import { createNote } from './reducers/noteReducer';
import { filterChange } from './reducers/filterReducer';

const reducer = combineReducers({
    notes: noteReducer,
    filter: filterReducer,
});

const store = createStore(reducer, composeWithDevTools());

// store.dispatch(filterChange('IMPORTANT'));
// store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
