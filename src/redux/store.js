import { createStore } from "redux";
import mainReducer from "./reducer";

// createStore is depreciated, instead use configureStore from @redux/toolkit package.
const store = createStore(mainReducer);

export default store;