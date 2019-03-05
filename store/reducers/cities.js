import { combineReducers } from 'redux';
import {
  LOAD_WEATHER_DATA_REQUEST,
  LOAD_WEATHER_DATA_SUCCESS,
} from '../types/weather';

const initailState = {
  data: null,
};

const data = (state = initailState.data, action) => {
  const { payload, type } = action;

  switch (type) {
    case LOAD_WEATHER_DATA_REQUEST: {
      return null;
    }
    case LOAD_WEATHER_DATA_SUCCESS: {
      return { ...(payload.cities || {}) };
    }
    default: return state;
  }
};

export default combineReducers({
  data,
});
