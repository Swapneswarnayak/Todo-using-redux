import { legacy_createStore } from "redux";
import MyReducer from "./Reducer/Reducer";
// import logger from "redux-logger";

const MyStore = legacy_createStore(MyReducer);

export default MyStore;
