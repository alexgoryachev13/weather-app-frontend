import {
  all,
  call,
  fork,
  put,
  take,
} from 'redux-saga/effects';

import { COMPLETE_ACTION_HANDLER } from '../../constants/symbols';
import { loadWeatherDataSuccess } from '../actions/weather';
import { LOAD_WEATHER_DATA_REQUEST } from '../types/weather';

import { fetchWeatherData } from '../../api/weather';

function* loadWeatherData() {
  while (true) {
    const action = yield take(LOAD_WEATHER_DATA_REQUEST);
    const response = yield call(fetchWeatherData);

    yield put(loadWeatherDataSuccess(response.data));

    if (action[COMPLETE_ACTION_HANDLER]) {
      action[COMPLETE_ACTION_HANDLER](response);
    }
  }
}

export default function* watchWeather() {
  yield all([fork(loadWeatherData)]);
}
