import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Provider } from 'react-redux';
import App from './App';

// import noteReducer, { initializeNotes } from './reducers/noteReducer';
import noteReducer from './reducers/noteReducer';
import filterReducer from './reducers/filterReducer';

// import noteService from './services/notes';

const reducer = combineReducers({
    notes: noteReducer,
    filter: filterReducer,
});

const store = createStore(reducer, composeWithDevTools());

// * we don't use this because its not as efficient as creating a new action that intializes all the notes at once instead of iterating through the array and dispatching the create note action for each note.
// noteService.getAll().then((notes) =>
//     notes.forEach((note) => {
//         store.dispatch({ type: 'NEW_NOTE', data: note });
//     })
// );

// * this is more efficient but it's more ideal to initialize notes in the App component
//noteService.getAll().then((notes) => store.dispatch(initializeNotes(notes)));

// store.dispatch(filterChange('IMPORTANT'));
// store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
