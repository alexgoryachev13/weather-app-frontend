import { combineReducers } from 'redux';
import {
  LOAD_WEATHER_DATA_REQUEST,
  LOAD_WEATHER_DATA_SUCCESS,
  LOAD_WEATHER_DATA_ERROR,
} from '../types/weather';

const initailState = {
  isLoading: false,
  error: null,
  data: null,
};

const isLoading = (state = initailState.isLoading, action) => {
  const { type } = action;

  switch (type) {
    case LOAD_WEATHER_DATA_REQUEST: {
      return true;
    }
    case LOAD_WEATHER_DATA_SUCCESS:
    case LOAD_WEATHER_DATA_ERROR: {
      return false;
    }
    default: return state;
  }
};

const data = (state = initailState.error, action) => {
  const { payload, type } = action;

  switch (type) {
    case LOAD_WEATHER_DATA_REQUEST:
    case LOAD_WEATHER_DATA_ERROR: {
      return null;
    }
    case LOAD_WEATHER_DATA_SUCCESS: {
      return { ...payload.weather };
    }
    default: return state;
  }
};


const error = (state = initailState.error, action) => {
  const { payload, type } = action;

  switch (type) {
    case LOAD_WEATHER_DATA_SUCCESS:
    case LOAD_WEATHER_DATA_REQUEST: {
      return null;
    }
    case LOAD_WEATHER_DATA_ERROR: {
      return payload;
    }
    default: return state;
  }
};

export default combineReducers({
  isLoading,
  error,
  data,
});
