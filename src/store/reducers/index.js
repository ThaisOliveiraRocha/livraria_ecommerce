import { livrariaReducer } from './livraria';
import { combineReducers } from 'redux';

export const reducers = combineReducers({
  livraria: livrariaReducer
});
