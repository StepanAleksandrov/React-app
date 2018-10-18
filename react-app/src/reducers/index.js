import { combineReducers } from 'redux';
import {authentication} from './loginReducer';
import {registration} from './registrationReducer';

const allReducers = combineReducers({
    registration,
    authentication
});

export default allReducers;