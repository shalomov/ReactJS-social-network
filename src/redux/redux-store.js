import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import asideReducer from "./aside-reducer";

const { createStore, combineReducers } = require("redux");



let reducers = combineReducers({
    profilePage: profileReducer ,
    dialogsPage: dialogsReducer,
    aside: asideReducer
});


let store = createStore(reducers);


export default store;